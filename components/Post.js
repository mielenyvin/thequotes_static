import Link from 'next/link'
// import Image from 'next/image'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  return (

    <Link href={`/blog/${post.slug}`}>
        
    <div className='cursor-pointer h-full w-full bg-white rounded-lg shadow-md hover:shadow-lg'>
      {!compact && (
        <img
          src={post.frontmatter.cover_image}
          alt=''
          width={600}
          height={400}
          className='mb-4 rounded-t-lg'
        />
      )}
        <div className = 'mx-5 my-2 flex justify-between items-top'>
        <span className='font-light text-gray-600'>
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className='mt-2'>
      <div className='mx-5 my-2' >
      <span className='text-blue text-base font-bold'>
      {post.frontmatter.source1} : {post.frontmatter.title}
       </span></div>
     
       <divider className='border-qblue'><div className='px-2 pt-0 leading-5 pb-1  text-black rounded-xl'>Vs</div></divider>


       <div className='mx-5 mt-2 mb-6' >
       <span className='text-blue text-base font-bold'>
       {post.frontmatter.source2} :  {post.frontmatter.title2}
          </span>
          </div>
        <p className='mt-2 mx-5 text-gray-600'>{post.frontmatter.excerpt}</p>
      </div>

      {!compact && (
<div></div>
      )}
    </div>
    </Link>
  )
}