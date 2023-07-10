import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <a href="https://slack.com/oauth/v2/authorize?client_id=5546871361013.5552770712450&scope=app_mentions:read,channels:history,channels:read,chat:write,files:read,im:history,links:read,mpim:history,users.profile:read&user_scope=channels:history,files:read,bookmarks:read,channels:read,im:history"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
      
    </main>
  )
}
