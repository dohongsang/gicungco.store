import { useEffect } from "react"
import { useRouter } from "next/router";
import NProgress from 'nprogress'

export const RouterLoading = () => {
  const router = useRouter()

  const onLoad = () => {
    NProgress.start()
  }
  const onDone = () => {
    NProgress.done()
  }

  useEffect(() => {
    router.events.on('routeChangeStart', onLoad)
    router.events.on('routeChangeComplete', onDone)
    router.events.on('routeChangeError', onDone)

    return () => {
      router.events.off('routeChangeStart', onLoad)
      router.events.off('routeChangeComplete', onDone)
      router.events.off('routeChangeError', onDone)
    }
  })
  return (
    <div></div>
  )
}