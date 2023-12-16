import SiteConfig from '@/info/site'
import PaddingContainer from '../paddingContainer'
import Link from 'next/link'
import SocialLinks from '../socialLinks'
import { FiTwitter } from 'react-icons/fi'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6'
export default function Footer() {
  return (
    <div className="mt-12 ">
      <PaddingContainer>
        <div className=" flex flex-wrap justify-between gap-4 border-t py-6">
          <div>
            <div className="text-sm font-medium">#contactme</div>
            <div className="flex items-center gap-2 text-neutral-600 dark:text-white mt-2">
              <SocialLinks
                link={SiteConfig.socialLinks.github}
                platform={<FaGithub size={18} />}
                title="Github"
              />
              <SocialLinks
                link={SiteConfig.socialLinks.linkedin}
                platform={<FaLinkedin size={18} />}
                title="Linkedin"
              />
              <SocialLinks
                link={SiteConfig.socialLinks.twitter}
                platform={<FiTwitter size={18} />}
                title="Twitter "
              />
              <SocialLinks
                link={SiteConfig.socialLinks.instagran}
                platform={<FaInstagram size={18} />}
                title="Instagram "
              />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400 dark:text-white  font-medium">
              Currently At:
            </div>
            <div className="bg-white  dark:bg-black shadow-md rounded-md px-3 py-2 flex items-center gap-2">
              <div className="bg-emerald-400 rounded-full w-2 h-2"></div>
              <p className="text-sm ">{SiteConfig.currentlyAt}</p>
            </div>
          </div>
        </div>
        <div className="py-4 border-t flex flex-wrap justify-between gap-4 mt-4">
          <div className="text-sm text-neutral-400 dark:text-white">
            All rights are reserved | Copyright {new Date().getFullYear()}
          </div>
          <div className="text-sm text-neutral-400 dark:text-white">
            Made with love by{' '}
            <Link
              href="/"
              className="text-big-stone font-bold dark:text-big-stone"
            >
              Next
            </Link>{' '}
            and{' '}
            <Link
              href="/"
              className="text-big-stone font-bold dark:text-big-stone"
            >
              Taiwlind
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  )
}
