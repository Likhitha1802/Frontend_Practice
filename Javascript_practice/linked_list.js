class node{
    constructor (val){
        this.val = val;
        this.next=null;
    }
}
class SinglyLinkedlist{
    constructor (){
        this.head = null
        this.tail = null
        this.length=0
    }

//push a new node
push(val){
    let newNode = new node(val)
    if(!this.head){
        this.head=newNode
        this.tail=this.head
    }
    else{
        this.tail.next=newNode
        this.tail=newNode
    }
    this.length++
    return this
}

pop(){
    if(!this.head) return undefined
    var current = this.head;
    var newTail = current;
    while(current.next){
        newTail = current;
        current = current.next;
    }

    this.tail = newTail
    this.tail.next = null;
    this.length--;
    if(this.length == 0){
        this.head = null;
        this.tail = null;
    }
    return current;
}

shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head=currentHead.next;
    this.length--;
    if(this.length===0){
        this.tail=null;
    }
    return currentHead;
}

unshift(val){
    var newNode = new node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++;
        return newNode;
    
}

// get(index){
//     if(index<0 || index>=this.length){
//         return null
//     }
//     var counter=0
//     var current=this.head;
//     while(counter!=index){
//         current=current.next;
//         counter++;
//     }
//     return current;
// }
get(index){
    if(index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while(counter !== index){
        current = current.next;
        counter++;
    }
    return current;
}

set(value){

}


}



//pushing the node

const n1=new SinglyLinkedlist();
console.log(n1)
n1.push(200)
console.log(n1)
n1.push(7000)
console.log(n1)

//poping the node
n1.pop()
console.log(n1)
n1.push(8000)
n1.push(9000)
console.log(n1)

//shifting the node
n1.shift()
console.log(n1)

//unshifting
n1.unshift(2);
console.log(n1)

//index
n1.get(1);
console.log(n1.get(1))