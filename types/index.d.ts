export declare type pantryItem = {
    name: string,
    qty: number,
    bought: string,
    lifespan: number,
    usedBy:{
        users?:[
            {
                name: string,
                in: Array<string>
            }
        ]
    }
}

export declare type dashboardData = {
    [tab: string]: [pantryItem]
}

export declare type metadata = {
    tab: string,
    itemName?: string,
}

export declare type pantryContext = {
    data?: dashboardData,
    retry?: boolean,
    error?: boolean,
    isLoaded?: boolean,
    selected?: pantryItem,
    setSelected?: Dispatch<SetStateAction<pantryItem>>
    setRetry?: Dispatch<SetStateAction<boolean>>,
    setData?: Dispatch<SetStateAction<any[]>>,
}