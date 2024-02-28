export const useCreateAnchorTag = (tag: string, text: string) => {
  const { $getMediaFromS3 } = useMediaFromS3()
  return `
        <div id="${ createAnchorID(text) }" class="anchor_title">
          <${ tag } class="anchor_title-h">${ text }</${ tag }>
          <div class="anchor_copy-link">
            <button data-id="${ createAnchorID(text) }" class="copy-link">
              <img src="${ $getMediaFromS3('images/core/common/anchor.svg') }" alt="Anchor" width="16" height="16" />
            </button>
            <div class="anchor_copy-link-tooltip">Copy link</div>
          </div>
        </div>
      `
}
