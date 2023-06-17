import './App.css';
import Typewriter from "typewriter-effect";

let username = "Rescuer! How are you doing today John  "


const Greet = () => {


  let timeNow = new Date().getHours();
  return timeNow >= 5 && timeNow < 12
    ? `Good Morning ${username}` 
    : timeNow >= 12 && timeNow < 18
      ? `Good Afternoon ${username}` 
      : `Good evening ${username}`;

}

export default function App() {

  return (
    <main className='h1' style={{
      fontSize: 72,
    }}>
      <Typewriter
 
 onInit={(typewriter) => {
     typewriter
         .typeString(Greet())
         .start()
         .deleteAll()
        .typeString(Greet())
        .start();
 }}
/>
      {/* <Greet /> */}
    </main>
  )
}






















// let username = "Kamala Srinivas"

// const Greet = () => {
//   let timeNow = new Date().getHours();
//   return timeNow >= 5 && timeNow < 12
//     ? <div>Good Morning {username} </div>
//     : timeNow >= 12 && timeNow < 18
//       ? <div>Good Afternoon {username} </div>
//       : <div>Good evening {username} </div>;
// }
// export default function App() {
//   return (
//     <main className='h1' style={{
//       fontSize: 72,
//     }}>
//       <Greet />
//     </main>
//   )
// }