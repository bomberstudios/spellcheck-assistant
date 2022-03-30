import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'
import SpellChecker from 'spellchecker'

const spellchecker: RuleDefinition = {
  rule: async (context) => {
    const { utils } = context
    for (const textLayer of utils.objects.text) {
      const text = textLayer.attributedString.string
      const errors = SpellChecker.checkSpelling(text)
      if (errors.length > 0) {
        utils.report(`Text layer "${textLayer.name}" has ${errors.length} spelling errors.`)
      }
    }
  },
  name: 'spellcheck-assistant/spellchecker',
  title: 'Spellchecker',
  description: 'Checks the spelling on this document',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'spellcheck-assistant',
    rules: [spellchecker],
    config: {
      rules: {
        'spellcheck-assistant/spellchecker': { active: true },
      },
    },
  }
}

export default assistant
