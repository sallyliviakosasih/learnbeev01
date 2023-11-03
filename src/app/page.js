/* eslint-disable react/no-unescaped-entities */
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

      <div className='border border-dark-muted my-8 px-6 py-5'>
        <div className='flex gap-5' id='headerQuestin'>
          <div className='' id='questionRates'>
            <button>
              <Image
                src={'/icon/upvoteIcon.svg'}
                alt='Ikon vote pertanyaan'
                width={29}
                height={29}
              />
            </button>
            <h1 className='text-center text-lg'>100</h1>
          </div>
          <div className='grid grid-rows-2' id='uploaderDetail'>
            <div className='flex gap-4 items-center' id='userDetail'>
              <h1 className='font-bold text-lg'>Adi Taher</h1>
              <div className='flex gap-1 text-sm text-darker-muted'>
                <h2>2020</h2>
                <h2>Ilmu Komputer</h2>
              </div>
            </div>
            <h2 className='text-sm text-darker-muted' id='time'>1 menit yang lalu</h2>
          </div>
        </div>

        <div className='py-4' id='mainQuestion'>
          <h1 className='font-bold text-lg'>Tolong bantu saya untuk memecahkan error berikut!!</h1>
          <Image className='mx-auto my-3'
            src={'/sample/sample1.png'}
            alt='Gambar Soal'
            width={820}
            height={320}
          />
        </div>
        <div className='flex relative items-center' id='QuestionDetail'>
          <div className='flex px-4 gap-3' id='tags'>
            <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full'>vscode</a>
            <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full'>javascript</a>
          </div>
          <a href='#' className='flex absolute right-0 px-4 py-2 border rounded-full '>
            <h1>Bantu Jawab</h1>
            <Image className='mx-2'
              src={'/icon/arrowIcon.svg'}
              alt='Ikon Selanjutnya'
              width={14}
              height={15}
            />
          </a>
        </div>
      </div>

      <div className='border border-dark-muted my-8 px-6 py-5'>
        <div className='flex gap-5' id='headerQuestin'>
          <div className='' id='questionRates'>
            <button>
              <Image
                src={'/icon/upvoteIcon.svg'}
                alt='Ikon vote pertanyaan'
                width={29}
                height={29}
              />
            </button>
            <h1 className='text-center text-lg'>100</h1>
          </div>
          <div className='grid grid-rows-2' id='uploaderDetail'>
            <div className='flex gap-4 items-center' id='userDetail'>
              <h1 className='font-bold text-lg'>Adi Taher</h1>
              <div className='flex gap-1 text-sm text-darker-muted'>
                <h2>2020</h2>
                <h2>Ilmu Komputer</h2>
              </div>
            </div>
            <h2 className='text-sm text-darker-muted' id='time'>1 menit yang lalu</h2>
          </div>
        </div>

        <div className='py-4' id='mainQuestion'>
          <h1 className='font-bold text-lg'>I'm working on data structures project in C++. Can someone help me with implementing a binary search tree?</h1>
          <h2>I'm struggling on my data structure project relating binary search tree. can someone please give me an example of the code for perforing tree transversal? I haven't had the clearest idea about this topic let alone implementing it in C++</h2>
        </div>
        <div className='flex relative items-center' id='QuestionDetail'>
          <div className='flex px-4 gap-3' id='tags'>
            <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full'>C++</a>
            <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full'>Data structure</a>
            <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full'>Binary Search Tree</a>
          </div>
          <a href='#' className='flex absolute right-0 px-4 py-2 border rounded-full '>
            <h1>Bantu Jawab</h1>
            <Image className='mx-2'
              src={'/icon/arrowIcon.svg'}
              alt='Ikon Selanjutnya'
              width={14}
              height={15}
            />
          </a>
        </div>
      </div>
    </>
  )
}
