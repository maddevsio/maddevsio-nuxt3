import axios from 'axios'
import * as cheerio from 'cheerio';
import { AnyNode, BasicAcceptedElems, CheerioAPI } from 'cheerio'
import { ReviewsData } from '~/interfaces/server/IServerClutchReviews'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const clutchWidgetUrl = 'https://widget.clutch.co/widgets/get/12?ref_domain=widget.clutch.co&uid=258762&ref_path=/testpage/'
  const clutchLinkReview = 'https://clutch.co/profile/mad-devs?utm_campaign=widget&utm_content=num_reviews&utm_medium=8&utm_source=widget&utm_term=maddevs.io/#'
  const data: ReviewsData = {
    reviews: [],
  }

  const transformData = (card: BasicAcceptedElems<AnyNode>, $: CheerioAPI) => {
    if ($(card)) {
      $(card).find('.on').text('')
      data.reviews.push({
        href: `${ clutchLinkReview }${ $(card).attr('href')!.split('#')[1] }`,
        rating: $(card).find('.rating').text(),
        fivestar: $(card).find('.fivestar').parent().html(),
        text: $(card).find('.carousel_widget__text').text(),
        author: $(card).find('.carousel_widget__author').text(),
        verified: $(card).find('.carousel_widget__verified').text(),
      })
    }
  }

  const cardIdSelectors = [
    '[data-slide-index="1"]',
    '[data-slide-index="0"]',
    '[data-slide-index="5"]',
    '[data-slide-index="4"]',
  ]

  try {
    const response = await axios.get(clutchWidgetUrl)
    const $ = cheerio.load(response.data)
    $('.fivestar-widget-static').find('.on').text('')
    data.headerRating = $('.fivestar-widget-static').html()
    data.rating = $('.carousel_widget__container .rating').text().trim()
    data.reviewsCount = $('.reviews-count a').text()

    if (!query?.count && query.count !== 'all') {
      cardIdSelectors.forEach(card => {
        transformData(card, $)
      })
    } else {
      const cardsData = $('[data-slide-index]')
      cardsData.each((_, element) => {
        transformData(element, $)
      })
    }

    return data
  } catch (e) {
    // eslint-disable-next-line
    console.log('ERROR', e)
    return e
  }
})
