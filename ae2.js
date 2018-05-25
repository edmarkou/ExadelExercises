const arr = [
    {id: 1, name: "dog", parentId: null},
    {id: 2, name: "Buddy", parentId: 1},
    {id: 3, name: "Daisy", parentId: 1},
    {id: 4, name: "cat", parentId: null},
    {id: 5, name: "Smokey", parentId: 4},
    {id: 6, name: "Oscar", parentId: 4}
];

function createObject(arr) {

    let parentObjects = [];
    let mainObject = {};

    arr.forEach((obj) => {
        if(obj.parentId === null){
            mainObject[obj.name] = [];
            parentObjects[obj.id] = obj.name;
        } else {
            if(mainObject[parentObjects[obj.parentId]].length === undefined)
                i = 0;
            else
                i = mainObject[parentObjects[obj.parentId]].length;

            mainObject[parentObjects[obj.parentId]][i] = {name: obj.name};
        }
    });
    console.log(mainObject);
}

createObject(arr);