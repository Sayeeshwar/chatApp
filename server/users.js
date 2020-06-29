const users=[]

const addUser=({id,name,room})=>{

    name=name.trim().toLowerCase();
    room=room.trim().toLowerCase();

    const existingUser= users.find((user)=> user.name==name && user.room==room);

    if(existingUser)
    {
        return {error:'Username is taken!'}
    }
    const user ={name,id,room};
    users.push(user);
    return {user}

}

const removeUser= () => {

}

const getUser= () => {
    
}


const getUsersInRoom= () => {
    
}