import React from 'react';
import { Pressable, Text } from 'react-native';
import { X, Upload } from 'lucide-react';
import Image from 'next/image';

interface ProductFormImagesProps {
  previewImages: string[];
  onImagesChange: React.Dispatch<React.SetStateAction<File[]>>;
  onPreviewImagesChange: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ProductFormImages({
  previewImages,
  onImagesChange,
  onPreviewImagesChange,
}: ProductFormImagesProps) {
  const handleImageUpload = () => {
    const input = document.getElementById('image-upload') as HTMLInputElement;
    if (input) input.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const files = Array.from(e.target.files);
    onImagesChange(prev => [...prev, ...files]);

    const newPreviews = files.map(file => URL.createObjectURL(file));
    onPreviewImagesChange(prev => [...prev, ...newPreviews]);
  };

  const removeImage = (index: number) => {
    onImagesChange(prev => prev.filter((_, i) => i !== index));
    onPreviewImagesChange(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <Pressable
        onPress={handleImageUpload}
        className="p-4 bg-[#9F1020] rounded-lg flex items-center justify-center"
      >
        <Upload className="w-4 h-4 mr-2 text-white" />
        <Text className="text-white text-lg">Subir Imágenes</Text>
      </Pressable>
      <input
        id="image-upload"
        type="file"
        multiple
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
      />

      {previewImages.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {previewImages.map((src, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square relative overflow-hidden rounded-lg border border-[#B99A02]">
                <Image
                  src={src}
                  alt={`Preview ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <Pressable
                onPress={() => removeImage(index)}
                className="absolute top-2 right-2 p-1 rounded-full bg-[#9F1020] text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#85020E]"
              >
                <X className="w-4 h-4 text-white" />
              </Pressable>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
