'use client'

import React from 'react'
import ProductFormSelects from './product-form-select'
import ProductFormImages from './product-form-images'
import ProductFormSubmitButton from './product-form-submit-button'
import type { FormData, Option } from '@/components/crm/shared/types'

interface ProductFormContentProps {
  form: FormData
  images: File[]
  previewImages: string[]
  isLoading: boolean
  options: { brands: Option[]; models: Option[]; categories: Option[]; sizes: Option[] }
  onFormChange: (field: keyof FormData, value: string) => void
  onImagesChange: React.Dispatch<React.SetStateAction<File[]>>
  onPreviewImagesChange: React.Dispatch<React.SetStateAction<string[]>>
  onSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProductFormContent({
  form,
  images,
  previewImages,
  isLoading,
  options,
  onFormChange,
  onImagesChange,
  onPreviewImagesChange,
  onSubmit,
}: ProductFormContentProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(true)
    try {
      const formData = new FormData()
      Object.entries(form).forEach(([key, value]) => formData.append(key, value))
      images.forEach(image => formData.append('images', image))
      const response = await fetch('/api/products', { method: 'POST', body: formData })
      if (!response.ok) throw new Error('Error creating product')
    } catch (error) {
      console.error('Error:', error)
    } finally {
      onSubmit(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ProductFormSelects form={form} options={options} onChange={onFormChange} />
      <ProductFormImages
        previewImages={previewImages}
        onImagesChange={onImagesChange}
        onPreviewImagesChange={onPreviewImagesChange}
      />
      <ProductFormSubmitButton isLoading={isLoading} />
    </form>
  )
}
