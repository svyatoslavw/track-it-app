"use client"

import EmojiPicker, {
  EmojiClickData,
  SkinTonePickerLocation,
  SuggestionMode
} from "emoji-picker-react"
import { memo, useMemo } from "react"

type TProps = {
  onClick: (emojiData: EmojiClickData) => void
}

function EmojiesPicker({ onClick }: TProps) {
  const emojiPicker = useMemo(
    () => (
      <EmojiPicker
        lazyLoadEmojis={true}
        onEmojiClick={onClick}
        searchPlaceHolder="Search emoji..."
        suggestedEmojisMode={SuggestionMode.RECENT}
        skinTonePickerLocation={SkinTonePickerLocation.PREVIEW}
        className="my-2"
      />
    ),
    [onClick]
  )

  return <>{emojiPicker}</>
}

export default memo(EmojiesPicker)
