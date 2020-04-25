(this["webpackJsonppe-viewer"]=this["webpackJsonppe-viewer"]||[]).push([[0],{41:function(e,t,a){e.exports=a(54)},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),o=(a(46),a(24)),c=a(74),s=(a(47),a(77)),m=a(76),u=a(78),d=Object(c.a)((function(e){return{paper:{fontFamily:"monospace",padding:e.spacing(0),textAlign:"center",borderRadius:0},m0:{margin:0},hand:{cursor:"pointer"}}}));function p(e){var t=d();return r.a.createElement(m.a,{className:t.paper,style:{background:e.color||"white"}},r.a.createElement("h3",{className:t.m0,style:{fontSize:e.fontSize||"12px"}},e.title),e.tooltip?r.a.createElement(u.a,{className:t.hand,title:e.tooltip},r.a.createElement("p",{className:t.m0},e.value)):r.a.createElement("p",{className:t.m0},e.value))}var O=a(3),b=a(4),E=a(1),v=a(79),j=a(30),_=new Map([[1,"RELOCS_STRIPPED"],[2,"EXECUTABLE_IMAGE"],[4,"LINE_NUMS_STRIPPED"],[8,"LOCAL_SYMS_STRIPPED"],[16,"AGGRESSIVE_WS_TRIM"],[32,"LARGE_ADDRESS_AWARE"],[128,"BYTES_REVERSED_LO"],[256,"32BIT_MACHINE"],[512,"DEBUG_STRIPPED"],[1024,"REMOVABLE_RUN_FROM_SWAP"],[2048,"NET_RUN_FROM_SWAP"],[4096,"SYSTEM"],[8192,"DLL"],[16384,"UP_SYSTEM_ONLY"],[32768,"BYTES_REVERSED_HI"]]);function f(e){var t,a=[],n=Object(j.a)(_);try{for(n.s();!(t=n.n()).done;){var r=Object(o.a)(t.value,2),i=r[0],l=r[1];e&i&&a.push(l)}}catch(c){n.e(c)}finally{n.f()}return a.join("\n")}var g=new Map([[0,"UNKNOWN"],[467,"AM33"],[34404,"AMD64"],[448,"ARM"],[43620,"ARM64"],[452,"ARMNT"],[3772,"EBC"],[332,"I386"],[512,"IA64"],[36929,"M32R"],[614,"MIPS16"],[870,"MIPSFPU"],[1126,"MIPSFPU16"],[496,"POWERPC"],[497,"POWERPCFP"],[358,"R4000"],[20530,"RISCV32"],[20580,"RISCV64"],[20776,"RISCV128"],[418,"SH3"],[419,"SH3DSP"],[422,"SH4"],[424,"SH5"],[450,"THUMB"],[361,"WCEMIPSV2"]]),x=new Map([[0,"UNKNOWN"],[1,"NATIVE"],[2,"WINDOWS_GUI"],[3,"WINDOWS_CUI"],[5,"OS2_CUI"],[7,"POSIX_CUI"],[8,"NATIVE_WINDOWS"],[9,"WINDOWS_CE_GUI"],[10,"EFI_APPLICATION"],[11,"EFI_BOOT_SERVICE_DRIVER"],[12,"EFI_RUNTIME_DRIVER"],[13,"EFI_ROM"],[14,"XBOX"],[16,"WINDOWS_BOOT_APPLICATION"]]),S=new Map([[32,"HIGH_ENTROPY_VA"],[64,"DYNAMIC_BASE"],[128,"FORCE_INTEGRITY"],[256,"NX_COMPAT"],[512,"NO_ISOLATION"],[1024,"NO_SEH"],[2048,"NO_BIND"],[4096,"APPCONTAINER"],[8192,"WDM_DRIVER"],[16384,"GUARD_CF"],[32768,"TERMINAL_SERVER_AWARE"]]);var h=Object(c.a)((function(e){return{root:{flexGrow:0},title:{boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",background:"#6633FF",color:"white"},address:{fontFamily:"monospace"},paper:{padding:e.spacing(0),textAlign:"center",color:e.palette.text.secondary},uploadButton:{padding:0,margin:"8px"},uploadInput:{opacity:0,paddingTop:"5px",paddingBottom:"5px"}}}));var N=function(){var e,t,n,i,l,c,m,u,d,_,N,w,I,R,A,M,D,T,P,C,y,U,z,B,V,W,L,F,H,k,G,Y,X,J,K,$,q,Q=h(),Z=r.a.useState(void 0),ee=Object(o.a)(Z,2),te=ee[0],ae=ee[1];return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{color:"primary",className:Q.uploadButton,variant:"contained"},r.a.createElement("span",{style:{position:"absolute"}},"Upload PE file"),r.a.createElement("input",{type:"file",className:Q.uploadInput,id:"inputFile",onChange:function(e){var t,n=null===(t=e.target.files)||void 0===t?void 0:t.item(0),r=new FileReader;r.onload=function(){var e=this.result,t=new Uint8Array(e);a.e(3).then(a.bind(null,86)).then((function(e){var a=e.parse_pe(t);ae(a)}))},r.readAsArrayBuffer(n.slice(0))}})),r.a.createElement(s.a,{container:!0,spacing:0},r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"0")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"1")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"2")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"3")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"4")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"5")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"6")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"7")),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"0x00")),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"Signature",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(e=te.dos_header.signature)||void 0===e?void 0:e.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"#CD5B6C"})),r.a.createElement(s.a,{item:!0,xs:6},r.a.createElement(p,{title:"DOS Header",value:"---",color:"rgb(96,140,196)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"0x08")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:8},r.a.createElement(p,{title:"DOS Header",value:"---",color:"rgb(96,140,196)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"...")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:8},"......"),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"0x38")),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"DOS Header",value:"---",color:"rgb(96,140,196)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"PE Header Ptr",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(t=te.dos_header.pe_pointer)||void 0===t?void 0:t.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(204, 224, 118)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"0x40")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:8},r.a.createElement(p,{title:"DOS Stub",value:"---",color:"rgb(96,140,196)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"...")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:8},"......"),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"Signature",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.signature),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"Machine",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.coff_header.machine),Object(E.map)((function(e){return g.get(e)})),Object(E.getOrElse)((function(){return"---"}))),tooltip:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(n=te.coff_header.machine)||void 0===n?void 0:n.toString(16)),Object(E.map)((function(e){return"raw value: 0x"+e})),E.toUndefined),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"#Sections",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.coff_header.number_of_sections.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+8})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"Date Time",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.coff_header.time_date_stamp),Object(E.map)((function(e){return new Date(1e3*e)})),Object(E.map)((function(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()<9?"0":"").concat(e.getMonth()+1,"-").concat(e.getDate())})),Object(E.getOrElse)((function(){return"---"}))),tooltip:Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.coff_header.time_date_stamp),Object(E.map)((function(e){return"Unix time: "+e})),E.toUndefined),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"Deprecated",value:"---",color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+16})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"Deprecated",value:"---",color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"OptHeaderSize",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(i=te.coff_header.size_of_optional_header)||void 0===i?void 0:i.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"Characts",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.coff_header.characteristics.toString()),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),tooltip:Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.coff_header.characteristics),Object(E.map)(f),E.toUndefined),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+24})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"Magic",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(l=te.optional_header)||void 0===l?void 0:l.standard_fields.magic),Object(E.map)((function(e){return 267===e?"PE32":"PE32+"})),Object(E.getOrElse)((function(){return"---"}))),tooltip:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(c=te.optional_header)||void 0===c?void 0:c.standard_fields.magic.toString(16)),Object(E.map)((function(e){return"raw value: 0x"+e})),E.toUndefined),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:1},r.a.createElement(p,{title:"MajorLV",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(m=te.optional_header)||void 0===m?void 0:m.standard_fields.major_linker_version.toString()),Object(E.getOrElse)((function(){return"---"}))),fontSize:"8px",color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:1},r.a.createElement(p,{title:"MinorLV",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(u=te.optional_header)||void 0===u?void 0:u.standard_fields.minor_linker_version.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"SizeOfCode",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(d=te.optional_header)||void 0===d?void 0:d.standard_fields.size_of_code.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+32})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"SizeOfInitData",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(_=te.optional_header)||void 0===_?void 0:_.standard_fields.size_of_initialized_data.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"SizeOfUninitData",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(N=te.optional_header)||void 0===N?void 0:N.standard_fields.size_of_uninitialized_data.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+40})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"EntryPointAddr",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(w=te.optional_header)||void 0===w?void 0:w.standard_fields.address_of_entry_point.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"BaseOfCode",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(I=te.optional_header)||void 0===I?void 0:I.standard_fields.base_of_code.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+48})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"BaseOfData",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(R=te.optional_header)||void 0===R?void 0:R.standard_fields.base_of_data.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"ImageBase",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(A=te.optional_header)||void 0===A?void 0:A.windows_fields.image_base.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+56})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"SectionAlignment",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(M=te.optional_header)||void 0===M?void 0:M.windows_fields.section_alignment.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"FileAlignment",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(D=te.optional_header)||void 0===D?void 0:D.windows_fields.file_alignment.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+64})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"MajorOSVersion",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(T=te.optional_header)||void 0===T?void 0:T.windows_fields.major_operating_system_version.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"MinorOSVersion",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(P=te.optional_header)||void 0===P?void 0:P.windows_fields.minor_operating_system_version.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"MajorImageVer",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(C=te.optional_header)||void 0===C?void 0:C.windows_fields.major_image_version.toString(16)),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"MinorImageVer",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(y=te.optional_header)||void 0===y?void 0:y.windows_fields.minor_image_version.toString(16)),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+72})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"MajorSubsysVer",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(U=te.optional_header)||void 0===U?void 0:U.windows_fields.major_subsystem_version.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"MinorSubsysVer",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(z=te.optional_header)||void 0===z?void 0:z.windows_fields.minor_subsystem_version.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"Win32Version",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(B=te.optional_header)||void 0===B?void 0:B.windows_fields.win32_version_value.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+80})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"SizeOfImage",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(V=te.optional_header)||void 0===V?void 0:V.windows_fields.size_of_image.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"SizeOfHeaders",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(W=te.optional_header)||void 0===W?void 0:W.windows_fields.size_of_headers.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+88})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"CheckSum",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(L=te.optional_header)||void 0===L?void 0:L.windows_fields.check_sum.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"Subsystem",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(F=te.optional_header)||void 0===F?void 0:F.windows_fields.subsystem),Object(E.map)((function(e){return x.get(e)})),Object(E.getOrElse)((function(){return"---"}))),tooltip:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(H=te.optional_header)||void 0===H?void 0:H.windows_fields.subsystem.toString(16)),Object(E.map)((function(e){return"raw value: 0x"+e})),E.toUndefined),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(p,{title:"DllCharacts",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(k=te.optional_header)||void 0===k?void 0:k.windows_fields.dll_characteristics.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),tooltip:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(G=te.optional_header)||void 0===G?void 0:G.windows_fields.dll_characteristics),Object(E.map)((function(e){return function(e){var t,a=[],n=Object(j.a)(S);try{for(n.s();!(t=n.n()).done;){var r=Object(o.a)(t.value,2),i=r[0],l=r[1];e&i&&a.push(l)}}catch(c){n.e(c)}finally{n.f()}return a.join("\n")}(e)})),E.toUndefined),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+96})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"StackReserve",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(Y=te.optional_header)||void 0===Y?void 0:Y.windows_fields.size_of_stack_reserve.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"StackCommit",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(X=te.optional_header)||void 0===X?void 0:X.windows_fields.size_of_stack_commit.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+104})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"HeapReserve",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(J=te.optional_header)||void 0===J?void 0:J.windows_fields.size_of_heap_reserve.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"HeapCommit",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(K=te.optional_header)||void 0===K?void 0:K.windows_fields.size_of_heap_commit.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(b.pipe)(Object(O.a)(null===te||void 0===te?void 0:te.dos_header.pe_pointer),Object(E.map)((function(e){return e+112})),Object(E.map)((function(e){return"0x"+e.toString(16)})),Object(E.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"LoaderFlags",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===($=te.optional_header)||void 0===$?void 0:$.windows_fields.loader_flags.toString(16)),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"#RvaAndSizes",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(q=te.optional_header)||void 0===q?void 0:q.windows_fields.number_of_rva_and_sizes.toString()),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),["ExportTable","ImportTable","ResourceTable","ExceptionTable","CertificateTable","BaseLocationTable","Debug","ArchData","GlobalPtr","TLSTable","LoadConfigTable","BoundImport","ImportAddressTable","DelayImportDescriptor","CLRRuntimeHeader"].map((function(e,t){var a,n;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:e,value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(a=te.optional_header)||void 0===a?void 0:a.data_directories),Object(E.chain)((function(e){return Object(O.a)(e["data_directories".concat(t)])})),Object(E.map)((function(e){return e.virtual_address.toString(16)})),Object(E.map)((function(e){return"0x"+e})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(150, 230, 255)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(p,{title:"Size",value:Object(b.pipe)(Object(O.a)(null===te||void 0===te||null===(n=te.optional_header)||void 0===n?void 0:n.data_directories),Object(E.chain)((function(e){return Object(O.a)(e["data_directories".concat(t)])})),Object(E.map)((function(e){return e.size.toString()})),Object(E.getOrElse)((function(){return"---"}))),color:"rgb(150, 230, 255)"})),r.a.createElement(s.a,{item:!0,xs:2}))})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:8},r.a.createElement(p,{title:"0-filled",value:"0",color:"rgb(150, 230, 255)"})),r.a.createElement(s.a,{item:!0,xs:2})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.eb2461fa.chunk.js.map