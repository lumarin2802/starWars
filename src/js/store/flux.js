const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            likesGuardados: [],
            characters: [],
            planets: [],
            vehicles: [],
            detailCharacter: {},
            detailPlanet: {},
            detailVehicle: {},


        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getDetailCharacter: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then((response) => response.json())
                    .then((data) => setStore({
                        detailCharacter: data.result
                    }));
            },

            getDetailPlanet: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then((response) => response.json())

                    .then((data) => setStore({
                        detailPlanet: data.result
                    }));
            },

            getDetailVehicle: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id)
                    .then((response) => response.json())

                    .then((data) => setStore({
                        detailVehicle: data.result
                    }));
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

            giveMeLikes: likes => {
                const store = getStore();
                setStore({
                    likesGuardados: [
                        ...store.likesGuardados,
                        likes
                    ]
                });
            },

            dotLikeItAnymore: like => {
                const store = getStore();
                setStore({
                    likesGuardados: store.likesGuardados.filter((elemento) => elemento !== like)
                })
                console.log("hola")
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