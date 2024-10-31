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
        className="my-2"
        lazyLoadEmojis={true}
        searchPlaceHolder="Search emoji..."
        skinTonePickerLocation={SkinTonePickerLocation.PREVIEW}
        suggestedEmojisMode={SuggestionMode.RECENT}
        onEmojiClick={onClick}
      />
    ),
    [onClick]
  )

  return <>{emojiPicker}</>
}

export default memo(EmojiesPicker)
