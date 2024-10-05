interface IInventory{
    listItems():string[];
}

class InventoryDelhi implements IInventory{
    private items = ['delhi_shirt', 'delhi_tshirt', 'delhi_pant'];
    
    listItems(){
        return this.items
    }
}

class InventoryPunjab implements IInventory{
    private items = ['punjab_shirt', 'punjab_tshirt', 'punjab_pant'];
    
    listItems(){
        return this.items
    }
}

class InventoryFactory{
    private inventoryLocation:string

    constructor(location:string){
        this.inventoryLocation = location
    }

    inventory():IInventory{
        switch(this.inventoryLocation){
            case 'Delhi':
                return new InventoryDelhi();

            case 'Punjab':
                return new InventoryPunjab();
        }
    }
}


const items = new InventoryFactory('Delhi').inventory().listItems();
console.log(items);