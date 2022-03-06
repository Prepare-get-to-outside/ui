import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Input, Tag as TagAntd } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

interface TagProps {
  tags: string[]
  setTags: (tags: string[]) => void
}

export const Tag = ({ tags, setTags }: TagProps) => {
  const [editInputIndex, setEditInputIndex] = useState(-1)
  const [inputVisible, setInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [editInputValue, setEditInputValue] = useState('')
  const saveEditInputRef = useRef<Input>(null)
  const saveInputRef = useRef<Input>(null)

  const handleInputConfirm = () => {
    let _tags = [...tags]

    if (inputValue && tags.indexOf(inputValue) === -1) {
      _tags.push(inputValue)
    }

    setTags(_tags)
    setInputVisible(false)
    setInputValue('')
  }

  const handleEditInputConfirm = () => {
    const newTags = [...tags]
    newTags[editInputIndex] = editInputValue

    setTags(newTags)
    setEditInputIndex(-1)
    setEditInputValue('')
  }

  const handleClose = (removedTag: string) => {
    const _tags = tags.filter((_tag) => _tag !== removedTag)
    setTags(_tags)
  }

  const showInput = async () => {
    await setInputVisible(true)
    saveInputRef.current?.focus()
  }

  return (
    <>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <TagInput
              ref={saveEditInputRef}
              key={tag}
              type="text"
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={(e) => setEditInputValue(e.target.value)}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          )
        }

        return (
          <TagAntd
            className="edit-tag"
            key={tag}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={async (e) => {
                await setEditInputIndex(index)
                await setEditInputValue(tag)
                saveEditInputRef.current?.focus()
                e.preventDefault()
              }}
            >
              {tag}
            </span>
          </TagAntd>
        )
      })}
      {inputVisible ? (
        <TagInput
          ref={saveInputRef}
          type="text"
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <TagAntd className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> New Tag
        </TagAntd>
      )}
    </>
  )
}

const TagInput = styled(Input)`
  width: 80px;
`
