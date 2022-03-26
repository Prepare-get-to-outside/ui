interface Tag {
    id: number;
    name: string;
}

type tagType = {
    id: number,
    name: string,
}

interface RestaurantInfo {
    rest_nm: string;
    rest_lon: number;
    rest_cd?: number;
    rest_mn?: number,
    rmk_dc?: string,
    tag_cd?: string[],
}

type ApiResponse = {
    status: number;
    response: unknown;
}