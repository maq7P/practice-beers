interface BearVolume {
    value: number,
    unit: string
}
export interface ModelBear {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number,
    ibu: number,
    target_fg: number,
    target_og: number,
    ebc: number,
    srm: number,
    ph: number,
    attenuation_level: number,
    volume: BearVolume
    boil_volume: BearVolume,
    method: any,
    ingredients: any,
    food_pairing: any,
    brewers_tips: any,
    contributed_by: any,
}