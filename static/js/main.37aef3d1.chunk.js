(this["webpackJsonppe-viewer"]=this["webpackJsonppe-viewer"]||[]).push([[0],{41:function(e,t,a){e.exports=a(54)},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),c=(a(46),a(19)),o=a(74),s=(a(47),a(77)),m=a(76),u=a(78),d=Object(o.a)((function(e){return{paper:{fontFamily:"monospace",padding:e.spacing(0),textAlign:"center",borderRadius:0},m0:{margin:0},hand:{cursor:"pointer"}}}));function E(e){var t=d();return r.a.createElement(m.a,{className:t.paper,style:{background:e.color||"white"}},r.a.createElement("h3",{className:t.m0,style:{fontSize:e.fontSize||"12px"}},e.title),e.tooltip?r.a.createElement(u.a,{className:t.hand,title:e.tooltip},r.a.createElement("p",{className:t.m0},e.value)):r.a.createElement("p",{className:t.m0},e.value))}var p=a(3),O=a(4),b=a(1),_=a(79),v=a(29),j=new Map([[1,"RELOCS_STRIPPED"],[2,"EXECUTABLE_IMAGE"],[4,"LINE_NUMS_STRIPPED"],[8,"LOCAL_SYMS_STRIPPED"],[16,"AGGRESSIVE_WS_TRIM"],[32,"LARGE_ADDRESS_AWARE"],[128,"BYTES_REVERSED_LO"],[256,"32BIT_MACHINE"],[512,"DEBUG_STRIPPED"],[1024,"REMOVABLE_RUN_FROM_SWAP"],[2048,"NET_RUN_FROM_SWAP"],[4096,"SYSTEM"],[8192,"DLL"],[16384,"UP_SYSTEM_ONLY"],[32768,"BYTES_REVERSED_HI"]]);function f(e){var t,a=[],n=Object(v.a)(j);try{for(n.s();!(t=n.n()).done;){var r=Object(c.a)(t.value,2),i=r[0],l=r[1];e&i&&a.push(l)}}catch(o){n.e(o)}finally{n.f()}return a.join("\n")}var g=new Map([[0,"UNKNOWN"],[467,"AM33"],[34404,"AMD64"],[448,"ARM"],[43620,"ARM64"],[452,"ARMNT"],[3772,"EBC"],[332,"I386"],[512,"IA64"],[36929,"M32R"],[614,"MIPS16"],[870,"MIPSFPU"],[1126,"MIPSFPU16"],[496,"POWERPC"],[497,"POWERPCFP"],[358,"R4000"],[20530,"RISCV32"],[20580,"RISCV64"],[20776,"RISCV128"],[418,"SH3"],[419,"SH3DSP"],[422,"SH4"],[424,"SH5"],[450,"THUMB"],[361,"WCEMIPSV2"]]),x=new Map([[0,"UNKNOWN"],[1,"NATIVE"],[2,"WINDOWS_GUI"],[3,"WINDOWS_CUI"],[5,"OS2_CUI"],[7,"POSIX_CUI"],[8,"NATIVE_WINDOWS"],[9,"WINDOWS_CE_GUI"],[10,"EFI_APPLICATION"],[11,"EFI_BOOT_SERVICE_DRIVER"],[12,"EFI_RUNTIME_DRIVER"],[13,"EFI_ROM"],[14,"XBOX"],[16,"WINDOWS_BOOT_APPLICATION"]]),S=new Map([[32,"HIGH_ENTROPY_VA"],[64,"DYNAMIC_BASE"],[128,"FORCE_INTEGRITY"],[256,"NX_COMPAT"],[512,"NO_ISOLATION"],[1024,"NO_SEH"],[2048,"NO_BIND"],[4096,"APPCONTAINER"],[8192,"WDM_DRIVER"],[16384,"GUARD_CF"],[32768,"TERMINAL_SERVER_AWARE"]]);var h=new Map([[8,"TYPE_NO_PAD"],[32,"CNT_CODE"],[64,"CNT_INITIALIZED_DATA"],[128,"CNT_UNINITIALIZED_DATA"],[256,"LNK_OTHER"],[512,"LNK_INFO"],[2048,"LNK_REMOVE"],[4096,"LNK_COMDAT"],[32768,"GPREL"],[1048576,"ALIGN_1BYTES"],[2097152,"ALIGN_2BYTES"],[3145728,"ALIGN_4BYTES"],[4194304,"ALIGN_8BYTES"],[5242880,"ALIGN_16BYTES"],[6291456,"ALIGN_32BYTES"],[7340032,"ALIGN_64BYTES"],[8388608,"ALIGN_128BYTES"],[9437184,"ALIGN_256BYTES"],[10485760,"ALIGN_512BYTES"],[11534336,"ALIGN_1024BYTES"],[12582912,"ALIGN_2048BYTES"],[13631488,"ALIGN_4096BYTES"],[14680064,"ALIGN_8192BYTES"],[16777216,"LNK_NRELOC_OVFL"],[33554432,"MEM_DISCARDABLE"],[67108864,"MEM_NOT_CACHED"],[134217728,"MEM_NOT_PAGED"],[268435456,"MEM_SHARED"],[536870912,"MEM_EXECUTE"],[1073741824,"MEM_READ"],[2147483648,"MEM_WRITE"]]);function N(e){var t,a=[],n=Object(v.a)(h);try{for(n.s();!(t=n.n()).done;){var r=Object(c.a)(t.value,2),i=r[0],l=r[1];e&i&&a.push(l)}}catch(o){n.e(o)}finally{n.f()}return a.join("\n")}var I=Object(o.a)((function(e){return{root:{flexGrow:0},title:{boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",background:"#6633FF",color:"white"},address:{fontFamily:"monospace"},paper:{padding:e.spacing(0),textAlign:"center",color:e.palette.text.secondary},uploadButton:{padding:0,margin:"8px"},uploadInput:{opacity:0,paddingTop:"5px",paddingBottom:"5px"}}}));var w=function(){var e,t,n,i,l,o,m,u,d,j,h,w,A,T,R,M,D,L,C,P,B,y,U,V,z,G,W,Y,F,H,k,K,X,J,Z,$,q,Q=I(),ee=r.a.useState(void 0),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],re=r.a.useState([]),ie=Object(c.a)(re,2),le=ie[0],ce=ie[1];return r.a.createElement("div",{className:"App"},r.a.createElement(_.a,{color:"primary",className:Q.uploadButton,variant:"contained"},r.a.createElement("span",{style:{position:"absolute"}},"Upload PE file"),r.a.createElement("input",{type:"file",className:Q.uploadInput,id:"inputFile",onChange:function(e){var t,n=null===(t=e.target.files)||void 0===t?void 0:t.item(0),r=new FileReader;r.onload=function(){var e=this.result,t=new Uint8Array(e);a.e(3).then(a.bind(null,86)).then((function(e){var a=e.parse_pe(t),n=JSON.parse(e.get_sections(t));console.log(n),ne(a),ce(n)}))},r.readAsArrayBuffer(n.slice(0))}})),r.a.createElement(s.a,{container:!0,spacing:0},r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"0")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"1")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"2")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"3")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"4")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"5")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"6")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:1},r.a.createElement("span",null,"7")),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"0x00")),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"Signature",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(e=ae.dos_header.signature)||void 0===e?void 0:e.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"#CD5B6C"})),r.a.createElement(s.a,{item:!0,xs:6},r.a.createElement(E,{title:"DOS Header",value:"---",color:"rgb(96,140,196)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"0x08")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:8},r.a.createElement(E,{title:"DOS Header",value:"---",color:"rgb(96,140,196)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"...")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:8},"......"),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"0x38")),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"DOS Header",value:"---",color:"rgb(96,140,196)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"PE Header Ptr",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(t=ae.dos_header.pe_pointer)||void 0===t?void 0:t.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(204, 224, 118)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"0x40")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:8},r.a.createElement(E,{title:"DOS Stub",value:"---",color:"rgb(96,140,196)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},"...")),r.a.createElement(s.a,{className:Q.title,item:!0,xs:8},"......"),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"Signature",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.signature),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"Machine",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.coff_header.machine),Object(b.map)((function(e){return g.get(e)})),Object(b.getOrElse)((function(){return"---"}))),tooltip:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(n=ae.coff_header.machine)||void 0===n?void 0:n.toString(16)),Object(b.map)((function(e){return"raw value: 0x"+e})),b.toUndefined),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"#Sections",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.coff_header.number_of_sections.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+8})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"Date Time",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.coff_header.time_date_stamp),Object(b.map)((function(e){return new Date(1e3*e)})),Object(b.map)((function(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()<9?"0":"").concat(e.getMonth()+1,"-").concat(e.getDate())})),Object(b.getOrElse)((function(){return"---"}))),tooltip:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.coff_header.time_date_stamp),Object(b.map)((function(e){return"Unix time: "+e})),b.toUndefined),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"Deprecated",value:"---",color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+16})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"Deprecated",value:"---",color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"OptHeaderSize",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(i=ae.coff_header.size_of_optional_header)||void 0===i?void 0:i.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"Characts",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.coff_header.characteristics.toString()),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),tooltip:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.coff_header.characteristics),Object(b.map)(f),b.toUndefined),color:"rgb(219, 255, 200)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+24})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"Magic",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(l=ae.optional_header)||void 0===l?void 0:l.standard_fields.magic),Object(b.map)((function(e){return 267===e?"PE32":"PE32+"})),Object(b.getOrElse)((function(){return"---"}))),tooltip:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(o=ae.optional_header)||void 0===o?void 0:o.standard_fields.magic.toString(16)),Object(b.map)((function(e){return"raw value: 0x"+e})),b.toUndefined),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:1},r.a.createElement(E,{title:"MajorLV",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(m=ae.optional_header)||void 0===m?void 0:m.standard_fields.major_linker_version.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:1},r.a.createElement(E,{title:"MinorLV",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(u=ae.optional_header)||void 0===u?void 0:u.standard_fields.minor_linker_version.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"SizeOfCode",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(d=ae.optional_header)||void 0===d?void 0:d.standard_fields.size_of_code.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+32})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"SizeOfInitData",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(j=ae.optional_header)||void 0===j?void 0:j.standard_fields.size_of_initialized_data.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"SizeOfUninitData",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(h=ae.optional_header)||void 0===h?void 0:h.standard_fields.size_of_uninitialized_data.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+40})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"EntryPointAddr",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(w=ae.optional_header)||void 0===w?void 0:w.standard_fields.address_of_entry_point.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"BaseOfCode",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(A=ae.optional_header)||void 0===A?void 0:A.standard_fields.base_of_code.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+48})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"BaseOfData",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(T=ae.optional_header)||void 0===T?void 0:T.standard_fields.base_of_data.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 232, 152)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"ImageBase",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(R=ae.optional_header)||void 0===R?void 0:R.windows_fields.image_base.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+56})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"SectionAlignment",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(M=ae.optional_header)||void 0===M?void 0:M.windows_fields.section_alignment.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"FileAlignment",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(D=ae.optional_header)||void 0===D?void 0:D.windows_fields.file_alignment.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+64})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"MajorOSVersion",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(L=ae.optional_header)||void 0===L?void 0:L.windows_fields.major_operating_system_version.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"MinorOSVersion",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(C=ae.optional_header)||void 0===C?void 0:C.windows_fields.minor_operating_system_version.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"MajorImageVer",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(P=ae.optional_header)||void 0===P?void 0:P.windows_fields.major_image_version.toString(16)),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"MinorImageVer",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(B=ae.optional_header)||void 0===B?void 0:B.windows_fields.minor_image_version.toString(16)),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+72})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"MajorSubsysVer",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(y=ae.optional_header)||void 0===y?void 0:y.windows_fields.major_subsystem_version.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"MinorSubsysVer",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(U=ae.optional_header)||void 0===U?void 0:U.windows_fields.minor_subsystem_version.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"Win32Version",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(V=ae.optional_header)||void 0===V?void 0:V.windows_fields.win32_version_value.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+80})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"SizeOfImage",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(z=ae.optional_header)||void 0===z?void 0:z.windows_fields.size_of_image.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"SizeOfHeaders",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(G=ae.optional_header)||void 0===G?void 0:G.windows_fields.size_of_headers.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+88})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"CheckSum",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(W=ae.optional_header)||void 0===W?void 0:W.windows_fields.check_sum.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"Subsystem",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(Y=ae.optional_header)||void 0===Y?void 0:Y.windows_fields.subsystem),Object(b.map)((function(e){return x.get(e)})),Object(b.getOrElse)((function(){return"---"}))),tooltip:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(F=ae.optional_header)||void 0===F?void 0:F.windows_fields.subsystem.toString(16)),Object(b.map)((function(e){return"raw value: 0x"+e})),b.toUndefined),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"DllCharacts",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(H=ae.optional_header)||void 0===H?void 0:H.windows_fields.dll_characteristics.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),tooltip:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(k=ae.optional_header)||void 0===k?void 0:k.windows_fields.dll_characteristics),Object(b.map)((function(e){return function(e){var t,a=[],n=Object(v.a)(S);try{for(n.s();!(t=n.n()).done;){var r=Object(c.a)(t.value,2),i=r[0],l=r[1];e&i&&a.push(l)}}catch(o){n.e(o)}finally{n.f()}return a.join("\n")}(e)})),b.toUndefined),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+96})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"StackReserve",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(K=ae.optional_header)||void 0===K?void 0:K.windows_fields.size_of_stack_reserve.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"StackCommit",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(X=ae.optional_header)||void 0===X?void 0:X.windows_fields.size_of_stack_commit.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+104})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"HeapReserve",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(J=ae.optional_header)||void 0===J?void 0:J.windows_fields.size_of_heap_reserve.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"HeapCommit",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(Z=ae.optional_header)||void 0===Z?void 0:Z.windows_fields.size_of_heap_commit.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement("span",{className:Q.address},Object(O.pipe)(Object(p.a)(null===ae||void 0===ae?void 0:ae.dos_header.pe_pointer),Object(b.map)((function(e){return e+112})),Object(b.map)((function(e){return"0x"+e.toString(16)})),Object(b.getOrElse)((function(){return""}))))),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"LoaderFlags",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===($=ae.optional_header)||void 0===$?void 0:$.windows_fields.loader_flags.toString(16)),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"#RvaAndSizes",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(q=ae.optional_header)||void 0===q?void 0:q.windows_fields.number_of_rva_and_sizes.toString()),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(254, 180, 184)"})),r.a.createElement(s.a,{item:!0,xs:2}),["ExportTable","ImportTable","ResourceTable","ExceptionTable","CertificateTable","BaseLocationTable","Debug","ArchData","GlobalPtr","TLSTable","LoadConfigTable","BoundImport","ImportAddressTable","DelayImportDescriptor","CLRRuntimeHeader"].map((function(e,t){var a,n;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:e,value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(a=ae.optional_header)||void 0===a?void 0:a.data_directories),Object(b.chain)((function(e){return Object(p.a)(e["data_directories".concat(t)])})),Object(b.map)((function(e){return e.virtual_address.toString(16)})),Object(b.map)((function(e){return"0x"+e})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(150, 230, 255)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"Size",value:Object(O.pipe)(Object(p.a)(null===ae||void 0===ae||null===(n=ae.optional_header)||void 0===n?void 0:n.data_directories),Object(b.chain)((function(e){return Object(p.a)(e["data_directories".concat(t)])})),Object(b.map)((function(e){return e.size.toString()})),Object(b.getOrElse)((function(){return"---"}))),color:"rgb(150, 230, 255)"})),r.a.createElement(s.a,{item:!0,xs:2}))})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:8},r.a.createElement(E,{title:"0-filled",value:"0",color:"rgb(150, 230, 255)"})),r.a.createElement(s.a,{item:!0,xs:2}),le.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:8},r.a.createElement(E,{title:"Name",value:e.name,color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"VirtualSize",value:e.virtual_size.toString(),color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"VirtualAddr",value:"0x"+e.virtual_address.toString(16),color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"RawDataSize",value:e.size_of_raw_data.toString(),color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"RawDataPtr",value:"0x"+e.pointer_to_raw_data.toString(16),color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"RelocationsPtr",value:"0x"+e.pointer_to_relocations.toString(16),color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"LinenumbersPtr",value:"0x"+e.pointer_to_linenumbers.toString(16),color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2}),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"#Relocations",value:e.number_of_relocations.toString(),color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(E,{title:"#Linenumbers",value:e.number_of_linenumbers.toString(),color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(E,{title:"Characts",value:"0x"+e.characteristics.toString(16),tooltip:N(e.characteristics),color:"rgb(251, 131, 255)"})),r.a.createElement(s.a,{item:!0,xs:2}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.37aef3d1.chunk.js.map