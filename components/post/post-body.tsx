import parse, { Element } from 'html-react-parser'
import Image from 'next/image'
export default function PostBody({ body }: { body: string }) {
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === 'img') {
          const { src, alt } = domNode.attribs
          return (
            <Image
              src={src}
              alt={alt}
              width={1280}
              height={620}
              className="rounded-md w-full obeject-cover object-center my-3 h-auto max-h-[300px] md:max-h-[500px]"
            />
          )
        }
      }
    },
  }

  const getParseHtml = (body: string) => {
    return parse(body, options)
  }
  return <div className="rich-text text-white">{getParseHtml(body)}</div>
}
