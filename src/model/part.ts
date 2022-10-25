export interface PartSchema {
    nxid: string
    manufacturer: string,
    name: string,
    type: string,
    location: string,
    quantity: number,
    frequency?: number,
    chipset?: number,
    memory_type?: string,
    peripheral_type?: string,
    storage_interface?: string,
    capacity?: number,
    capacity_unit?: string,
    num_ports?: number,
    port_type?: string,
    cable_end1?: string,
    cable_end2?: string,
}

