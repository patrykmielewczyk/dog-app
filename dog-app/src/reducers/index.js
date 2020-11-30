const initialState = {
    miniatureDogs : [
        {
            name:"Bichon Frise",
            weight_min:"3 kg",
            weight_max:"6 kg",
            diet: [
                {
                    puppy: "Brit"
                }
            ]
        },
        {
            name:"Chihuahua",
            weight_min:"1 kg",
            weight_max:"3 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Grzywacz Chiński",
            weight_min:"2 kg",
            weight_max:"5 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Jamnik",
            weight_min:"4 kg",
            weight_max:"5 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Charcik Włoski",
            weight_min:"3 kg",
            weight_max:"5 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Maltańczyk",
            weight_min:"2 kg",
            weight_max:"3 kg",
            diet: [
                
            ]
        },
        {
            name:"Papillion",
            weight_min:"2 kg",
            weight_max:"5 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Pekińczyk",
            weight_min:"3 kg",
            weight_max:"6 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Pomeranian",
            weight_min:"2 kg",
            weight_max:"3 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Pudel Miniaturowy",
            weight_min:"3 kg",
            weight_max:"7 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Yorkshire Terrier",
            weight_min:"2 kg",
            weight_max:"3 kg",
            diet: [
                ''
            ]
        }

    ],
    smallDogs: [
        {
            name:"Basenji",
            weight_min:"9 kg",
            weight_max:"11 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Beagle",
            weight_min:"8 kg",
            weight_max:"14 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Bedlington Terrier",
            weight_min:"8 kg",
            weight_max:"10 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Border Terrier",
            weight_min:"5 kg",
            weight_max:"7 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Boston Terrier",
            weight_min:"5 kg",
            weight_max:"12 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Caim Terrier",
            weight_min:"6 kg",
            weight_max:"8 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Cavalier King Charles Spaniel",
            weight_min:"5 kg",
            weight_max:"8 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Jamnik",
            weight_min:"9 kg",
            weight_max:"12 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Dandie Dinmont",
            weight_min:"8 kg",
            weight_max:"12 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Foxterrier",
            weight_min:"7 kg",
            weight_max:"8 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Bulldog Francuski",
            weight_min:"10 kg",
            weight_max:"12 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Jack Russel Terrier",
            weight_min:"5 kg",
            weight_max:"8 kg",
            diet: [
                ''
            ]
        },
        {
            name:"King Charles Spaniel",
            weight_min:"4 kg",
            weight_max:"6 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Lhasa Apso",
            weight_min:"6 kg",
            weight_max:"7 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Norfolk/Norwich Terrier",
            weight_min:"5 kg",
            weight_max:"6 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Pudel Miniaturowy",
            weight_min:"12 kg",
            weight_max:"14 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Mops",
            weight_min:"6 kg",
            weight_max:"8 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Sznaucer Miniaturowy",
            weight_min:"6 kg",
            weight_max:"7 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Schipperke",
            weight_min:"6 kg",
            weight_max:"8 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Terrier Szkocki",
            weight_min:"8 kg",
            weight_max:"11 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Sealyham Terrier",
            weight_min:"8 kg",
            weight_max:"9 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Owczarek Sheltie",
            weight_min:"6 kg",
            weight_max:"7 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Shiba Inu",
            weight_min:"9 kg",
            weight_max:"14 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Shih Tzu",
            weight_min:"5 kg",
            weight_max:"7 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Skye Terrier",
            weight_min:"8 kg",
            weight_max:"11 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Spaniel Tybetański",
            weight_min:"4 kg",
            weight_max:"7 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Terrier Tybetański",
            weight_min:"8 kg",
            weight_max:"14 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Welsh Corgi",
            weight_min:"9 kg",
            weight_max:"12 kg",
            diet: [
                ''
            ]
        },
        {
            name:"West Highland White Terrier",
            weight_min:"7 kg",
            weight_max:"10 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Whippet",
            weight_min:"10 kg",
            weight_max:"12 kg",
            diet: [
                ''
            ]
        },
    ],
    mediumDogs: [
        {
            name:"Airedale Terrier",
            weight_min:"20 kg",
            weight_max:"23 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Cocker Spaniel Amerykański",
            weight_min:"11 kg",
            weight_max:"13 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Basset Hound",
            weight_min:"18 kg",
            weight_max:"27 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Bearded Collie",
            weight_min:"18 kg",
            weight_max:"27 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Border Collie",
            weight_min:"14 kg",
            weight_max:"20 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Bulterrier",
            weight_min:"24 kg",
            weight_max:"30 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Bulldog Angielski",
            weight_min:"23 kg",
            weight_max:"25 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Chow Chow",
            weight_min:"20 kg",
            weight_max:"32 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Cocker Spaniel",
            weight_min:"13 kg",
            weight_max:"15 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Collie",
            weight_min:"18 kg",
            weight_max:"30 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Elghound",
            weight_min:"18 kg",
            weight_max:"23 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Pointer Angielski",
            weight_min:"20 kg",
            weight_max:"30 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Springer Spaniel Angielski",
            weight_min:"22 kg",
            weight_max:"25 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Szpic Fiński",
            weight_min:"14 kg",
            weight_max:"16 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Keeshond",
            weight_min:"25 kg",
            weight_max:"30 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Kerry Blue Terrier",
            weight_min:"15 kg",
            weight_max:"17 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Puli",
            weight_min:"9 kg",
            weight_max:"18 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Sznaucer",
            weight_min:"16 kg",
            weight_max:"20 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Shar Pei",
            weight_min:"16 kg",
            weight_max:"20 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Siberian Husky",
            weight_min:"16 kg",
            weight_max:"27 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Soft-Coated Wheaten Terrier",
            weight_min:"16 kg",
            weight_max:"21 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Staffordshire bull Terrier",
            weight_min:"11 kg",
            weight_max:"17 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Springer Spaniel",
            weight_min:"22 kg",
            weight_max:"24 kg",
            diet: [
                ''
            ]
        },
    ],
    largeDogs: [
        {
            name:"Chart Afgański",
            weight_min:"23 kg",
            weight_max:"27 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Owczarek Belgijski",
            weight_min:"28 kg",
            weight_max:"30 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Berneński Pies Pasterski",
            weight_min:"40 kg",
            weight_max:"44 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Chart Rosyjski",
            weight_min:"35 kg",
            weight_max:"48 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Bouvier Des Flandres",
            weight_min:"27 kg",
            weight_max:"40 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Bokser",
            weight_min:"25 kg",
            weight_max:"32 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Briard",
            weight_min:"30 kg",
            weight_max:"39 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Bullmastiff",
            weight_min:"41 kg",
            weight_max:"59 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Clumber Spaniel",
            weight_min:"29 kg",
            weight_max:"36 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Curly-Coated Retriever",
            weight_min:"32 kg",
            weight_max:"36 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Dalmatyńczyk",
            weight_min:"23 kg",
            weight_max:"27 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Dobermann",
            weight_min:"30 kg",
            weight_max:"40 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Dog De Bordeaux",
            weight_min:"45 kg",
            weight_max:"50 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Seter Angielski",
            weight_min:"25 kg",
            weight_max:"30 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Retriever Gładkowłosy",
            weight_min:"25 kg",
            weight_max:"36 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Owczarek Niemiecki",
            weight_min:"34 kg",
            weight_max:"43 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Wyżeł Niemiecki Krótkowłosy",
            weight_min:"25 kg",
            weight_max:"32 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Wyżeł Weimarski",
            weight_min:"32 kg",
            weight_max:"39 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Wyżeł Niemiecki Szorstkowłosy",
            weight_min:"20 kg",
            weight_max:"34 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Golden Retriever",
            weight_min:"27 kg",
            weight_max:"36 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Greyhound",
            weight_min:"27 kg",
            weight_max:"32 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Wyżeł Węgierski",
            weight_min:"22 kg",
            weight_max:"30 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Seter Irlandzki",
            weight_min:"27 kg",
            weight_max:"32 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Irlandzki Spaniel Wodny",
            weight_min:"20 kg",
            weight_max:"29 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Wyżeł Włoski Szorstkowłosy",
            weight_min:"29 kg",
            weight_max:"39 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Akita Inu",
            weight_min:"34 kg",
            weight_max:"50 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Labrador Retriever",
            weight_min:"25 kg",
            weight_max:"34 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Owczarek Bobtail",
            weight_min:"30 kg",
            weight_max:"40 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Otterhound",
            weight_min:"30 kg",
            weight_max:"55 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Pudel",
            weight_min:"20 kg",
            weight_max:"32 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Rhodesian Ridgeback",
            weight_min:"30 kg",
            weight_max:"39 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Rottweiler",
            weight_min:"41 kg",
            weight_max:"50 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Saluki",
            weight_min:"20 kg",
            weight_max:"30 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Samojed",
            weight_min:"32 kg",
            weight_max:"30 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Sznaucer Olbrzymi",
            weight_min:"32 kg",
            weight_max:"35 kg",
            diet: [
                ''
            ]
        },
    ],
    giantDogs: [
        {
            name:"Bloodhound",
            weight_min:"36 kg",
            weight_max:"50 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Chart Szkocki",
            weight_min:"36 kg",
            weight_max:"45 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Dog Niemiecki",
            weight_min:"45 kg",
            weight_max:"55 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Chart Irlandzki",
            weight_min:"40 kg",
            weight_max:"55 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Leonberger",
            weight_min:"34 kg",
            weight_max:"50 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Mastiff",
            weight_min:"80 kg",
            weight_max:"86 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Nowofundland",
            weight_min:"50 kg",
            weight_max:"70 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Pirenejski Pies Górski",
            weight_min:"40 kg",
            weight_max:"57 kg",
            diet: [
                ''
            ]
        },
        {
            name:"Bernardyn",
            weight_min:"50 kg",
            weight_max:"90 kg",
            diet: [
                ''
            ]
        },
    ]
}

const rootReducer = (state = initialState) => {
    return state;
};

export default rootReducer;