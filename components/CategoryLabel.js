import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    Politics: 'yellow',
    Technology: 'blue',
    Sport: 'green',
    Health: 'purple',
    Business: 'red',
    Sport: 'blue',
    Culture: 'gray',
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
