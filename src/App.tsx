import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import './App.css';
import {Grid} from "@material-ui/core";
import {ValueBlock} from "./components/ValueBlock";
import {HeaderExport} from "pe-wasm";
import {fromNullable} from "fp-ts/es6/Option";
import {pipe} from "fp-ts/lib/pipeable";
import {chain, getOrElse, map, toUndefined} from "fp-ts/lib/Option";
import Button from "@material-ui/core/Button";
import {getCharacteristicsString, getDLLCharacteristicsString, Machine, Subsystem} from "./bitfields";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    title: {
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        background: "#6633FF",
        color: "white"
    },
    address: {
        fontFamily: "monospace"
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    uploadButton: {
        padding: 0,
        margin: "8px",
    },
    uploadInput: {
        opacity: 0,
        paddingTop: "5px",
        paddingBottom: "5px"
    }
}));

function App() {
    const classes = useStyles();
    const [pe, setPe] = React.useState(undefined as HeaderExport | undefined);
    let dataDicts = [
        "ExportTable",
        "ImportTable",
        "ResourceTable",
        "ExceptionTable",
        "CertificateTable",

        "BaseLocationTable",
        "Debug",
        "ArchData",
        "GlobalPtr",
        "TLSTable",

        "LoadConfigTable",
        "BoundImport",
        "ImportAddressTable",
        "DelayImportDescriptor",
        "CLRRuntimeHeader"
    ];
    return (
        <div className="App">
            <Button color="primary" className={classes.uploadButton} variant="contained">
                <span style={({"position": "absolute"})}>Upload PE file</span>
                <input type="file" className={classes.uploadInput} id="inputFile" onChange={(e) => {
                    let file = e.target.files?.item(0)!;
                    const reader = new FileReader();
                    reader.onload = function () {
                        const arrayBuffer = this.result;
                        const array = new Uint8Array(arrayBuffer as any);
                        import("pe-wasm").then((pe_wasm) => {
                            let pe = pe_wasm.parse_pe(array);
                            setPe(pe);
                        })
                    };
                    reader.readAsArrayBuffer(file.slice(0))
                }}/>
            </Button>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                </Grid>
                <Grid className={classes.title} item xs={1}>
                    <span>0</span>
                </Grid>
                <Grid className={classes.title} item xs={1}>
                    <span>1</span>
                </Grid>
                <Grid className={classes.title} item xs={1}>
                    <span>2</span>
                </Grid>
                <Grid className={classes.title} item xs={1}>
                    <span>3</span>
                </Grid>
                <Grid className={classes.title} item xs={1}>
                    <span>4</span>
                </Grid>
                <Grid className={classes.title} item xs={1}>
                    <span>5</span>
                </Grid>
                <Grid className={classes.title} item xs={1}>
                    <span>6</span>
                </Grid>
                <Grid className={classes.title} item xs={1}>
                    <span>7</span>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>0x00</span>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title="Signature" value={
                        pipe(fromNullable(pe?.dos_header.signature?.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"#CD5B6C"}/>
                </Grid>
                <Grid item xs={6}>
                    <ValueBlock title="DOS Header" value={"---"} color={"rgb(96,140,196)"}/>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>0x08</span>
                </Grid>
                <Grid className={classes.title} item xs={8}>
                    <ValueBlock title="DOS Header" value={"---"} color={"rgb(96,140,196)"}/>
                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>
                    <span className={classes.address}>...</span>
                </Grid>
                <Grid className={classes.title} item xs={8}>
                    ......
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>0x38</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title="DOS Header" value={"---"} color={"rgb(96,140,196)"}/>
                </Grid>

                <Grid item xs={4}>
                    <ValueBlock title={"PE Header Ptr"} value={
                        pipe(fromNullable(pe?.dos_header.pe_pointer?.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(204, 224, 118)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>0x40</span>
                </Grid>
                <Grid className={classes.title} item xs={8}>
                    <ValueBlock title="DOS Stub" value={"---"} color={"rgb(96,140,196)"}/>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                    <span className={classes.address}>...</span>
                </Grid>
                <Grid className={classes.title} item xs={8}>
                    ......
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>{
                        pipe(fromNullable(pe?.dos_header.pe_pointer.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '')
                        )
                    }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"Signature"} value={
                        pipe(fromNullable(pe?.signature),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(219, 255, 200)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"Machine"}
                                value={
                                    pipe(fromNullable(pe?.coff_header.machine),
                                        map((it) => Machine.get(it)!),
                                        getOrElse(() => '---')
                                    )
                                }
                                tooltip={
                                    pipe(fromNullable(pe?.coff_header.machine?.toString(16)),
                                        map((it) => 'raw value: 0x' + it),
                                        toUndefined
                                    )
                                } color={"rgb(219, 255, 200)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"#Sections"} value={
                        pipe(fromNullable(pe?.coff_header.number_of_sections.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(219, 255, 200)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>{
                        pipe(fromNullable(pe?.dos_header.pe_pointer),
                            map(it => it + 8),
                            map((it) => '0x' + it.toString(16)),
                            getOrElse(() => '')
                        )
                    }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"Date Time"} value={
                        pipe(fromNullable(pe?.coff_header.time_date_stamp),
                            map(it => new Date(it * 1000)),
                            map(it => `${it.getFullYear()}-${it.getMonth() < 9 ? '0' : ''}${it.getMonth() + 1}-${it.getDate()}`),
                            getOrElse(() => '---')
                        )
                    } tooltip={
                        pipe(fromNullable(pe?.coff_header.time_date_stamp),
                            map(it => "Unix time: " + it),
                            toUndefined
                        )
                    }
                                color={"rgb(219, 255, 200)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"Deprecated"} value={"---"} color={"rgb(219, 255, 200)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>{
                        pipe(fromNullable(pe?.dos_header.pe_pointer),
                            map(it => it + 16),
                            map((it) => '0x' + it.toString(16)),
                            getOrElse(() => '')
                        )
                    }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"Deprecated"} value={"---"} color={"rgb(219, 255, 200)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"OptHeaderSize"} value={
                        pipe(fromNullable(pe?.coff_header.size_of_optional_header?.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(219, 255, 200)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"Characts"} value={
                        pipe(fromNullable(pe?.coff_header.characteristics.toString()),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } tooltip={
                        pipe(fromNullable(pe?.coff_header.characteristics),
                            map(getCharacteristicsString),
                            toUndefined
                        )
                    } color={"rgb(219, 255, 200)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>{
                        pipe(fromNullable(pe?.dos_header.pe_pointer),
                            map(it => it + 24),
                            map((it) => '0x' + it.toString(16)),
                            getOrElse(() => '')
                        )
                    }</span>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"Magic"} value={
                        pipe(fromNullable(pe?.optional_header?.standard_fields.magic),
                            map(it => it === 0x10b ? 'PE32' : 'PE32+'),
                            getOrElse(() => '---')
                        )
                    } tooltip={
                        pipe(fromNullable(pe?.optional_header?.standard_fields.magic.toString(16)),
                            map((it) => 'raw value: 0x' + it),
                            toUndefined
                        )
                    } color={"rgb(254, 232, 152)"
                    }></ValueBlock>
                </Grid>
                <Grid item xs={1}>
                    <ValueBlock title={"MajorLV"} value={
                        pipe(fromNullable(pe?.optional_header?.standard_fields.major_linker_version.toString()),
                            getOrElse(() => '---')
                        )
                    } fontSize={"8px"} color={"rgb(254, 232, 152)"}></ValueBlock>
                </Grid>
                <Grid item xs={1}>
                    <ValueBlock title={"MinorLV"} value={
                        pipe(fromNullable(pe?.optional_header?.standard_fields.minor_linker_version.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 232, 152)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"SizeOfCode"}
                                value={pipe(fromNullable(pe?.optional_header?.standard_fields.size_of_code.toString()),
                                    getOrElse(() => '---')
                                )} color={"rgb(254, 232, 152)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>{
                        pipe(fromNullable(pe?.dos_header.pe_pointer),
                            map(it => it + 32),
                            map((it) => '0x' + it.toString(16)),
                            getOrElse(() => '')
                        )
                    }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"SizeOfInitData"} value={
                        pipe(fromNullable(pe?.optional_header?.standard_fields.size_of_initialized_data.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 232, 152)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"SizeOfUninitData"} value={
                        pipe(fromNullable(pe?.optional_header?.standard_fields.size_of_uninitialized_data.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 232, 152)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>{
                        pipe(fromNullable(pe?.dos_header.pe_pointer),
                            map(it => it + 40),
                            map((it) => '0x' + it.toString(16)),
                            getOrElse(() => '')
                        )
                    }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"EntryPointAddr"} value={
                        pipe(fromNullable(pe?.optional_header?.standard_fields.address_of_entry_point.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 232, 152)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"BaseOfCode"} value={
                        pipe(fromNullable(pe?.optional_header?.standard_fields.base_of_code.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 232, 152)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>{
                        pipe(fromNullable(pe?.dos_header.pe_pointer),
                            map(it => it + 48),
                            map((it) => '0x' + it.toString(16)),
                            getOrElse(() => '')
                        )
                    }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"BaseOfData"} value={
                        pipe(fromNullable(pe?.optional_header?.standard_fields.base_of_data.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 232, 152)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"ImageBase"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.image_base.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>{
                        pipe(fromNullable(pe?.dos_header.pe_pointer),
                            map(it => it + 56),
                            map((it) => '0x' + it.toString(16)),
                            getOrElse(() => '')
                        )
                    }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"SectionAlignment"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.section_alignment.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"FileAlignment"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.file_alignment.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                    <span className={classes.address}>{
                        pipe(fromNullable(pe?.dos_header.pe_pointer),
                            map(it => it + 64),
                            map((it) => '0x' + it.toString(16)),
                            getOrElse(() => '')
                        )
                    }</span>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"MajorOSVersion"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.major_operating_system_version.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"MinorOSVersion"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.minor_operating_system_version.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"MajorImageVer"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.major_image_version.toString(16)),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"MinorImageVer"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.minor_image_version.toString(16)),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                     <span className={classes.address}>{
                         pipe(fromNullable(pe?.dos_header.pe_pointer),
                             map(it => it + 72),
                             map((it) => '0x' + it.toString(16)),
                             getOrElse(() => '')
                         )
                     }</span>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"MajorSubsysVer"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.major_subsystem_version.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"MinorSubsysVer"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.minor_subsystem_version.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"Win32Version"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.win32_version_value.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                     <span className={classes.address}>{
                         pipe(fromNullable(pe?.dos_header.pe_pointer),
                             map(it => it + 80),
                             map((it) => '0x' + it.toString(16)),
                             getOrElse(() => '')
                         )
                     }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"SizeOfImage"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.size_of_image.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"SizeOfHeaders"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.size_of_headers.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                     <span className={classes.address}>{
                         pipe(fromNullable(pe?.dos_header.pe_pointer),
                             map(it => it + 88),
                             map((it) => '0x' + it.toString(16)),
                             getOrElse(() => '')
                         )
                     }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"CheckSum"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.check_sum.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"Subsystem"}
                                value={
                                    pipe(fromNullable(pe?.optional_header?.windows_fields.subsystem),
                                        map((it) => Subsystem.get(it)!),
                                        getOrElse(() => '---')
                                    )
                                }
                                tooltip={
                                    pipe(fromNullable(pe?.optional_header?.windows_fields.subsystem.toString(16)),
                                        map((it) => 'raw value: 0x' + it),
                                        toUndefined
                                    )
                                } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                    <ValueBlock title={"DllCharacts"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.dll_characteristics.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } tooltip={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.dll_characteristics),
                            map((it) => getDLLCharacteristicsString(it)),
                            toUndefined
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                     <span className={classes.address}>{
                         pipe(fromNullable(pe?.dos_header.pe_pointer),
                             map(it => it + 96),
                             map((it) => '0x' + it.toString(16)),
                             getOrElse(() => '')
                         )
                     }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"StackReserve"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.size_of_stack_reserve.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"StackCommit"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.size_of_stack_commit.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>

                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                     <span className={classes.address}>{
                         pipe(fromNullable(pe?.dos_header.pe_pointer),
                             map(it => it + 104),
                             map((it) => '0x' + it.toString(16)),
                             getOrElse(() => '')
                         )
                     }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"HeapReserve"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.size_of_heap_reserve.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"HeapCommit"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.size_of_heap_commit.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                     <span className={classes.address}>{
                         pipe(fromNullable(pe?.dos_header.pe_pointer),
                             map(it => it + 112),
                             map((it) => '0x' + it.toString(16)),
                             getOrElse(() => '')
                         )
                     }</span>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"LoaderFlags"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.loader_flags.toString(16)),
                            map((it) => '0x' + it),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={4}>
                    <ValueBlock title={"#RvaAndSizes"} value={
                        pipe(fromNullable(pe?.optional_header?.windows_fields.number_of_rva_and_sizes.toString()),
                            getOrElse(() => '---')
                        )
                    } color={"rgb(254, 180, 184)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>

                {
                    dataDicts.map((val, index) => {
                        return (<React.Fragment key={index}>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={4}>
                                    <ValueBlock title={val}
                                                value={
                                                    pipe(fromNullable(pe?.optional_header?.data_directories as any),
                                                        chain(it => fromNullable(it[`data_directories${index}`])),
                                                        map(it => it.virtual_address.toString(16)),
                                                        map((it) => '0x' + it),
                                                        getOrElse(() => '---'))
                                                }
                                                color={"rgb(150, 230, 255)"}></ValueBlock>
                                </Grid>
                                <Grid item xs={4}>
                                    <ValueBlock title={"Size"} value={
                                        pipe(fromNullable(pe?.optional_header?.data_directories as any),
                                            chain(it => fromNullable(it[`data_directories${index}`])),
                                            map(it => it.size.toString()),
                                            getOrElse(() => '---'))
                                    } color={"rgb(150, 230, 255)"}></ValueBlock>
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                            </React.Fragment>
                        )
                    })
                }

                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <ValueBlock title={"0-filled"} value={"0"} color={"rgb(150, 230, 255)"}></ValueBlock>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
