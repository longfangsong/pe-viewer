export const Characteristics = new Map([
    [0x0001, 'RELOCS_STRIPPED'],
    [0x0002, 'EXECUTABLE_IMAGE'],
    [0x0004, 'LINE_NUMS_STRIPPED'],
    [0x0008, 'LOCAL_SYMS_STRIPPED'],
    [0x0010, 'AGGRESSIVE_WS_TRIM'],
    [0x0020, 'LARGE_ADDRESS_AWARE'],
    [0x0080, 'BYTES_REVERSED_LO'],
    [0x0100, '32BIT_MACHINE'],
    [0x0200, 'DEBUG_STRIPPED'],
    [0x0400, 'REMOVABLE_RUN_FROM_SWAP'],
    [0x0800, 'NET_RUN_FROM_SWAP'],
    [0x1000, 'SYSTEM'],
    [0x2000, 'DLL'],
    [0x4000, 'UP_SYSTEM_ONLY'],
    [0x8000, 'BYTES_REVERSED_HI'],
]);

export function getCharacteristicsString(code: number): string {
    let results = [];
    for (let [key, value] of Characteristics) {
        if (code & key) {
            results.push(value);
        }
    }
    return results.join('\n')
}

export const Machine = new Map([
    [0x0, "UNKNOWN"],
    [0x1d3, "AM33"],
    [0x8664, "AMD64"],
    [0x1c0, "ARM"],
    [0xaa64, "ARM64"],
    [0x1c4, "ARMNT"],
    [0xebc, "EBC"],
    [0x14c, "I386"],
    [0x200, "IA64"],
    [0x9041, "M32R"],
    [0x266, "MIPS16"],
    [0x366, "MIPSFPU"],
    [0x466, "MIPSFPU16"],
    [0x1f0, "POWERPC"],
    [0x1f1, "POWERPCFP"],
    [0x166, "R4000"],
    [0x5032, "RISCV32"],
    [0x5064, "RISCV64"],
    [0x5128, "RISCV128"],
    [0x1a2, "SH3"],
    [0x1a3, "SH3DSP"],
    [0x1a6, "SH4"],
    [0x1a8, "SH5"],
    [0x1c2, "THUMB"],
    [0x169, "WCEMIPSV2"],
]);

export const Subsystem = new Map([
    [0, "UNKNOWN"],
    [1, "NATIVE"],
    [2, "WINDOWS_GUI"],
    [3, "WINDOWS_CUI"],
    [5, "OS2_CUI"],
    [7, "POSIX_CUI"],
    [8, "NATIVE_WINDOWS"],
    [9, "WINDOWS_CE_GUI"],
    [10, "EFI_APPLICATION"],
    [11, "EFI_BOOT_SERVICE_DRIVER"],
    [12, "EFI_RUNTIME_DRIVER"],
    [13, "EFI_ROM"],
    [14, "XBOX"],
    [16, "WINDOWS_BOOT_APPLICATION"],
]);

export const DLLCharacteristics = new Map([
    [0x0020, "HIGH_ENTROPY_VA"],
    [0x0040, "DYNAMIC_BASE"],
    [0x0080, "FORCE_INTEGRITY"],
    [0x0100, "NX_COMPAT"],
    [0x0200, "NO_ISOLATION"],
    [0x0400, "NO_SEH"],
    [0x0800, "NO_BIND"],
    [0x1000, "APPCONTAINER"],
    [0x2000, "WDM_DRIVER"],
    [0x4000, "GUARD_CF"],
    [0x8000, "TERMINAL_SERVER_AWARE"],
]);

export function getDLLCharacteristicsString(code: number): string {
    let results = [];
    for (let [key, value] of DLLCharacteristics) {
        if (code & key) {
            results.push(value);
        }
    }
    return results.join('\n')
}

