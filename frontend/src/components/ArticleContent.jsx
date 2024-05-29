import React from 'react'

import courseImg from '../assets/JavaScript.png'
import References from './References'

const ArticleContent = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className="text-xl font-bold md:text-3xl px-4 border-b border-b-gray-700">
        The articles Title.
      </h2>
      <div className="w-full p-2 rounded-box bg-base-300">
        <img src={courseImg} alt="article image" className='w-full max-w-2xl mx-auto aspect-video object-contain' />
      </div>
      <p className='px-4'>
        <p className="font-bold text-xl py-2">paragraph title :</p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium distinctio vitae. Pariatur dolorum repudiandae, saepe odit dolorem ab magnam dolor dolores, provident suscipit fugit quidem obcaecati ducimus reiciendis adipisci eveniet vero nostrum laboriosam. Inventore illo esse sint quia. Recusandae cupiditate in distinctio quia voluptatibus alias voluptatem eligendi eaque ipsa magni consectetur, dicta eos nihil harum assumenda voluptates fugit facilis? Ut obcaecati, deleniti distinctio dolor eos ducimus excepturi aperiam eum recusandae, modi eaque vitae, nisi porro sunt. Omnis fugiat eum aspernatur quasi cumque provident soluta saepe corporis natus consequuntur culpa doloribus, quisquam optio expedita inventore iusto corrupti. Consectetur, reiciendis veritatis?
      </p>
      <p className='px-4'>
        <p className="font-bold text-xl py-2">paragraph title :</p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium distinctio vitae. Pariatur dolorum repudiandae, saepe odit dolorem ab magnam dolor dolores, provident suscipit fugit quidem obcaecati ducimus reiciendis adipisci eveniet vero nostrum laboriosam. Inventore illo esse sint quia. Recusandae cupiditate in distinctio quia voluptatibus alias voluptatem eligendi eaque ipsa magni consectetur, dicta eos nihil harum assumenda voluptates fugit facilis? Ut obcaecati, deleniti distinctio dolor eos ducimus excepturi aperiam eum recusandae, modi eaque vitae, nisi porro sunt. Omnis fugiat eum aspernatur quasi cumque provident soluta saepe corporis natus consequuntur culpa doloribus, quisquam optio expedita inventore iusto corrupti. Consectetur, reiciendis veritatis?
      </p>
      <p className='px-4'>
        <p className="font-bold text-xl py-2">paragraph title :</p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium distinctio vitae. Pariatur dolorum repudiandae, saepe odit dolorem ab magnam dolor dolores, provident suscipit fugit quidem obcaecati ducimus reiciendis adipisci eveniet vero nostrum laboriosam. Inventore illo esse sint quia. Recusandae cupiditate in distinctio quia voluptatibus alias voluptatem eligendi eaque ipsa magni consectetur, dicta eos nihil harum assumenda voluptates fugit facilis? Ut obcaecati, deleniti distinctio dolor eos ducimus excepturi aperiam eum recusandae, modi eaque vitae, nisi porro sunt. Omnis fugiat eum aspernatur quasi cumque provident soluta saepe corporis natus consequuntur culpa doloribus, quisquam optio expedita inventore iusto corrupti. Consectetur, reiciendis veritatis?
      </p>
      <p className='px-4'>
        <p className="font-bold text-xl py-2">paragraph title :</p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium distinctio vitae. Pariatur dolorum repudiandae, saepe odit dolorem ab magnam dolor dolores, provident suscipit fugit quidem obcaecati ducimus reiciendis adipisci eveniet vero nostrum laboriosam. Inventore illo esse sint quia. Recusandae cupiditate in distinctio quia voluptatibus alias voluptatem eligendi eaque ipsa magni consectetur, dicta eos nihil harum assumenda voluptates fugit facilis? Ut obcaecati, deleniti distinctio dolor eos ducimus excepturi aperiam eum recusandae, modi eaque vitae, nisi porro sunt. Omnis fugiat eum aspernatur quasi cumque provident soluta saepe corporis natus consequuntur culpa doloribus, quisquam optio expedita inventore iusto corrupti. Consectetur, reiciendis veritatis?
      </p>
      <div className="divider">References</div>
      <References />
    </div>
  )
}

export default ArticleContent