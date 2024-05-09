class LNode <T>{
    data: T;
    next: LNode <T>  | null;;

    constructor(val: T){
        this.data = val;
        this.next = null;
    }
}

class LinkedList <T>{
    head: LNode<T> | null;

    constructor() {
        this.head = null;
    }

    add(val: T){
        const newNode = new LNode(val);
        //if no head already
        if(!this.head){
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next != undefined){
            currentNode = currentNode.next;

        }
        currentNode.next = newNode;
    }
    // Print Values
    printValues() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

}


const l = new LinkedList<number>();
l.add(1);
l.add(2);
l.add(3);
l.printValues();