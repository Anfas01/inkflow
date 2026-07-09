import Navbar from "../components/Navbar"
import NoteCard from "../components/NoteCard"


const Home = () => {

  return (
    <>
      <Navbar />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </>
  )
}

export default Home
