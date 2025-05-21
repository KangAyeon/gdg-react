// UserList.jsx

// import {  useEffect, useState  } from 'react';
// export default function Userlist() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         async function fetchUsers() {
//             const res = await fetch('https://jsonplaceholder.typicode.com/users');
//             const data = await res.json();
//             setUsers(data);
            
//         }
    
//         fetchUsers();
//     }, [])

//     return (
//         <div>
//             <h2>사용자 목록</h2>
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>
//                         {user.name} ({user.email})
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }