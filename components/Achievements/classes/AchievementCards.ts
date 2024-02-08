import type {
  AchievementCardsProps,
  IAchievementCard,
  IAchievements,
} from '~/components/Achievements/interfaces/IAchievements'

export class AchievementCards implements IAchievements {
  achievements: IAchievementCard[]

  constructor(props: AchievementCardsProps) {
    this.achievements = props.items
  }
}
