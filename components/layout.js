import Menu from './menu';

export default function Layout({children}){
  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Menu/>
    <main>
      {children}
    </main>
    <footer>
      &copy; 2021
    </footer>
    </div>
  )
}