'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import ProductFormHeader from '@/components/crm/upload-product-form/product-form-header'
import ProductFormContent from '@/components/crm/upload-product-form/product-form-content'
import { FormData, Option } from '@/components/crm/shared/types'
import { VStack } from '@/components/ui/vstack'

export default function ProductFormUpload() {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState<FormData>({
    brand_id: '',
    model_id: '',
    category_id: '',
    size_id: '',
    product_price: '',
    product_currency: 'USD',
    product_description: '',
  })

  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [options, setOptions] = useState<{
    brands: Option[]
    models: Option[]
    categories: Option[]
    sizes: Option[]
  }>({ brands: [], models: [], categories: [], sizes: [] })

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [brands, models, categories, sizes] = await Promise.all([
          fetch('/api/brands').then(res => res.json()),
          fetch('/api/models').then(res => res.json()),
          fetch('/api/categories').then(res => res.json()),
          fetch('/api/sizes').then(res => res.json()),
        ])
        setOptions({ brands, models, categories, sizes })
      } catch (error) {
        console.error('Error loading options:', error)
      }
    }
    fetchOptions()
  }, [])

  const handleChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-[#0C111A] text-white p-6">
      <Card className="max-w-2xl mx-auto bg-[#0C111A] border-[#B99A02] text-white">
        <VStack space='lg'>
        <ProductFormHeader />
        <ProductFormContent
          form={form}
          images={images}
          previewImages={previewImages}
          isLoading={isLoading}
          options={options}
          onFormChange={handleChange}
          onImagesChange={setImages}
          onPreviewImagesChange={setPreviewImages}
          onSubmit={setIsLoading}
        />
        </VStack>

      </Card>
    </div>
  )
}
