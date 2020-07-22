import Layout from '@components/Layout'
import PostList from '@components/PostList'

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Download Mod Apk, Mod Games, Pro Apk , Premium Android Apps & Games Cracked For Free|Top Best Websites To Download Mod Apk and Mof Games</h1>

        <p className="description">
Would you like to get mod Apk Games and Apps at no cost? To be exact, the arrangement is yes. You're ready to get your alluring Apks/Games and Mods at no cost on the web in the event that you use web and search the perfect way. There are many real sites that offer free downloads of games and projects from their website. Anyway one needs to verify that these locales are secure. Look at the sort of data they flexibly preceding downloading a game or a specific Apk/Game.

An alternate method to acquire mod Apk games and projects for nothing is by connecting with developers. You can get in touch with them through different online long range informal communication destinations, for example, Facebook, MySpace and so on.. These sites will give you access to a high number of customers who've been mentioning their companions to download mod Apk and game for Android. You should find an approach to download mod Apk and game for Android in the area that you are enrolled. The games are not accessible for nothing. You need to pay for each download of the application or game which you download. This may indicate a few dollars and along these lines, you should create a selection of sites that don't request any forthright expense.

Most of the time, it's hard to locate the mod Apk and match for Android that you might want. Therefore, on the off chance that you are searching for mod Apk and game for Android at a specific site then you must make certain to scan for this on various territories to go over precisely the same as well. So as to discover these mods/games at a sensible value then you should take the help of web indexes. They will be able to agree with the terms and states of the site with the kind of Apk/Game that you're scanning for. You can check different sites for the best deals of mod Apk and match for Android. Web index is the best technique to locate the mod Apk and game to get Android. For More Info Visit-{' '}
          <a href="https://proapk.in">Download Latest Paid Android Apps, Mod Apk, Mod Games For Free. Premium Android Apps Cracked And Pro Apk Download</a>.
        </p>
        <main>
          <PostList posts={posts} />
        </main>
        <p>
          
        </p>
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
