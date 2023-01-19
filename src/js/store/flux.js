const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            characters: [],
            planets: [],
            vehicles: [],
            favorites: [],

        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            charactersFetch: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://www.swapi.tech/api/people/")
                    .then((response) => response.json())
                    // .then((data) => console.log(data.results))
                    .then((data) => setStore({
                        characters: data.results
                    }));
            },

            planetsFetch: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then((response) => response.json())
                    //.then((data) => console.log(data))
                    .then((data) => setStore({
                        planets: data.results
                    }));
            },
            vehiclesFetch: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then((response) => response.json())
                    //.then((data) => console.log(data))
                    .then((data) => setStore({
                        vehicles: data.results
                    }));
            },

            addFavorite: () => {
                console.log("funciona");
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;