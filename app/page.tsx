import PaddingContainer from '@/components/paddingContainer'

export default function Home() {
  return (
    <PaddingContainer>
      <div className="h-full flex flex-col gap-6 text-center">
        <h1 className="text-4xl">
          Hello, I am{' '}
          <span className="text-big-stone dark:text-sun">
            {'{'} Arlen Resende {'}'}
          </span>{' '}
          a full-stack developer
        </h1>
        <p className="text-sm lg:text-lg px-8 md:px-32">
          {'{ ... '} With almost 10 years of experience in technologies such as
          Node.js, React, PHP, and Liquid. Throughout my career, I have had the
          opportunity to work on challenging and complex projects, which has
          allowed me to acquire strong skills in building scalable and
          high-performance web applications.{' ... }'}
        </p>
      </div>
    </PaddingContainer>
  )
}
