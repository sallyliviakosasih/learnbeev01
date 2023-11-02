import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'LearnBee - Forum Diskusi Mahasiswa Fasilkom-TI USU',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className='flex px-9 py-5' id='navigationContainer'>
            <Image className='flex-none'
              src={'/logo/logoNav.svg'}
              alt='Logo LearnBee di Navigasi'
              width={220}
              height={39}
            />
            <div className='flex bg-mid-muted items-center rounded-full mx-auto px-7 py-4 w-1/2'>
              <input type='text' placeholder='Cari Topik, Pertanyaan, Buku, ...' className='bg-transparent mx-4 w-full focus:outline-none'></input>
              <button className=''>
                <Image
                  src={"/icon/searchIcon.svg"}
                  alt="Ikon Pencarian"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className='flex w-1/5 items-center'>
              <a href='#' className='bg-primary-yellow text-contrast rounded-full font-medium px-4 py-2 mx-5'>Masuk</a>
              <a href='#' className='border-2 rounded-full font-medium border-contrast px-4 py-2 mx-5'>Daftar</a>
            </div>
          </div>
        </header>
        <main>
        <main>
      <div className='grid grid-cols-5'>
        <div className='col-span-1 mx-10'>
          <h1>Feed</h1>
          <nav>
            <a href='#' className='flex'>
              <Image
                  src={'/icon/homeIcon.svg'}
                  alt='Ikon Halaman Utama'
                  width={18}
                  height={20}
              />
              <h2>Halaman Utama</h2>
            </a>
            <a href='#' className='flex'>
              <Image
                src={'/icon/latestIcon.svg'}
                alt='Ikon Terbaru'
                width={18}
                height={18}
              />
              <h2>Terbaru</h2>
            </a>
            <a href='#' className='flex'> 
              <h2>logo</h2>
              <h2>Trending</h2>
            </a>
          </nav>
            <h1>Lainnya</h1>
            <h2>Profile</h2>
        </div>
        <div className=''>{children}</div>
      </div>
    </main>
        </main>
      </body>
    </html>
  )
}