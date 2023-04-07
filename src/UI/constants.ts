export const customSelectStyles = {
    control: (base: any, state: any) => ({
        ...base,
        background: "transparent",
    }),
    menu: (base: any) => ({
        ...base,
        background: "black",
        border: '1px solid white',
        color: "white",
        zIndex: 10000000,
    }),
    menuList: (base: any) => ({
        ...base,
        padding: 0,
    }),
    placeholder: (base: any) => ({
        ...base,
        color: 'white'
    }),
    option: (base: any) => ({
        ...base,
        background: "transparent",
        "&:hover": {
            background: '#3FC4FD'
        },
    })
};