window.registerModuleCallback(function (config) {
  console.log('[Background Fetch] Checking fetch...')

  //  chrome.runtime.sendMessage({
  //    content: 'fetch_url_content',
  //    url: 'https://www.google.com/search?client=firefox-b-1-d&q=pizza+pie'
  //  }, function(fetchedContent) {
  //    console.log('[Background Fetch] Received content: ' + content.length)
  //    console.log(fetchedContent)
  //  })

  // const testUrl = 'https://www.aetherial.net'
  const testUrl = 'https://www.google.com/search?client=firefox-b-1-d&q=pizza+pie'

  const generateIFrameHtml = function () {
    const htmlCode = '<iframe id="background_fetch_frame" src="' + testUrl + '" style="width: 640px; height: 480px;"></iframe>'

    return htmlCode
  }

  if (window.location === window.parent.location) {
    /*    chrome.windows.create({
      height: 480,
      width: 640,
      type: 'panel',
      url: chrome.runtime.getURL('index.html')
    })
*/

    const existingFrame = document.getElementById('background_fetch_frame')

    if (existingFrame === null) {
      console.log('[Background Fetch] Inserting frame...')
      const htmlCode = generateIFrameHtml()

      const wrapper = document.createElement('div')
      wrapper.innerHTML = htmlCode

      document.querySelector('body').appendChild(wrapper.firstChild)
    } else {
      console.log('[Background Fetch] Frame found. Skipping...')
    }
  } else if (window.location === testUrl) {
    console.log('[Background Fetch] In ' + testUrl + '...')
    console.log('[Background Fetch] TODO: Wait for load and xmit DOM...')
  }
})
