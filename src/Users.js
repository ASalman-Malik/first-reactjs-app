import { Button, Card, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import { INITIAL_USERS_LIST } from "./InitialUserList";

export function Users(){
    const [users, setUsers] = useState(INITIAL_USERS_LIST);
    const [username, setUsername] = useState("");
    const [userpic, setUserPic] = useState("");
    return(
        <div>
            <div className='add-user-form'>
                <TextField
                    style={{width:'20rem', margin:'0.5rem'}}
                    value = {username}
                    onChange = {(event) => setUsername(event.target.value)}
                    type = "text"
                    label = "Name"
                    variant = "outlined"
                />
                 <TextField
                    style={{width:'20rem', marginBottom:'0.5rem'}}
                    value = {userpic}
                    onChange = {(event) => setUserPic(event.target.value)}
                    type = "text"
                    label = "Profile Picture"
                    variant = "outlined"
                />
                <Button
                    variant = "outlined"
                    color = "primary"
                    style={{backgroundColor:'lightGreen', color:'black'}}
                    onClick ={() => 
                        setUsers([...users,{
                            name: username,
                            pic: userpic,    
                        },
                    ])
                    }
                >Add User</Button>
            </div>
            <div className={'user-list'}>
                    {users.map((user) => (<User  name={user.name} pic ={ user.pic} id={user.id}/> ))}    
            </div>
        </div>
    );
}

function User({name, pic, id}){
    const history = useHistory();
    const [users, setUsers] = useState(INITIAL_USERS_LIST);
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
      }
    return(
        // onClick={() => history.push("/users/" + id)} 
        <Card  className={'user-card'}>
        <img
            style = {{
                borderRadius: '50%',
                height: '75px',
                width: '75px',
                objectFit: 'cover',
                boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.4)',
            }}
            src = {pic}
            alt='profile-pic'
        />
        <Button
          variant = "outlined"
          color = "primary"
          style={{backgroundColor:'white', color: 'black',marginRight:'1.5rem', marginLeft:'1.5rem' }}
          onClick={() => history.push("/users/" + id)}
         >See Detals</Button>
         <h2>{name}</h2>
         <div>
         <Button
         onClick={() => deleteUser(+id)}
          variant = "outlined"
          color = "primary"
          style={{backgroundColor:'crimson', color: 'black',marginRight:'1.5rem', marginLeft:'1.5rem' }}          
         >Delete User</Button>

          <Button
          variant = "outlined"
          color = "primary"
          onClick={() => 
            setUsers([...users],{
                name:'',
                pic:'',
            })
        }
          style={{backgroundColor:'lightGreen', color: 'black'}}
         >Edit User</Button>
         </div>
        </Card>
       
       
    );
}