import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='flex px-6 py-5 bg-cover relative items-center' style={{backgroundImage: 'url(background/background1.png)'}}>
        <h1 className='text-white font-semibold text-xl'>Kesulitan mengerjakan tugas?</h1>
        <a href='#' className='flex absolute right-0 mx-10 px-4 py-2 bg-primary-yellow rounded-full'>
          <Image
            src={'/icon/addQuestionIcon.svg'}
            alt='Ikon Tambah Pertanyaan'
            width={24}
            height={24}
          />
          <h2 className='text-contrast font-medium mx-2'>Ajukan pertanyaan</h2>
        </a>
      </div>
      <div className=''>Kolum pertanyaan yang telah ditambahkan</div>
    </>
  )
}
