"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Upload, Plus } from "lucide-react";
import { database, uploadImage } from "@/lib/database";

// Simple toast function
const toast = {
  success: (message: string) => alert(`✅ ${message}`),
  error: (message: string) => alert(`❌ ${message}`)
};

interface ProductForm {
  name: string;
  shortDescription: string;
  description: string;
  price: string;
  category: string;
  sizes: string[];
  colors: string[];
  images: File[];
}

const AddProductPage = () => {
  const [form, setForm] = useState<ProductForm>({
    name: "",
    shortDescription: "",
    description: "",
    price: "",
    category: "",
    sizes: [],
    colors: [],
    images: []
  });

  const [newSize, setNewSize] = useState("");
  const [newColor, setNewColor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "sneakers",
    "streetwear", 
    "accesorios-lujo",
    "runners",
    "hoodies",
    "t-shirts",
    "jeans"
  ];

  const handleInputChange = (field: keyof ProductForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const addSize = () => {
    if (newSize && !form.sizes.includes(newSize.toLowerCase())) {
      setForm(prev => ({
        ...prev,
        sizes: [...prev.sizes, newSize.toLowerCase()]
      }));
      setNewSize("");
    }
  };

  const removeSize = (size: string) => {
    setForm(prev => ({
      ...prev,
      sizes: prev.sizes.filter(s => s !== size)
    }));
  };

  const addColor = () => {
    if (newColor && !form.colors.includes(newColor.toLowerCase())) {
      setForm(prev => ({
        ...prev,
        colors: [...prev.colors, newColor.toLowerCase()]
      }));
      setNewColor("");
    }
  };

  const removeColor = (color: string) => {
    setForm(prev => ({
      ...prev,
      colors: prev.colors.filter(c => c !== color)
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setForm(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const removeImage = (index: number) => {
    setForm(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validaciones básicas
      if (!form.name || !form.price || !form.category) {
        toast.error("Por favor completa todos los campos obligatorios");
        return;
      }

      if (form.images.length === 0) {
        toast.error("Por favor sube al menos una imagen");
        return;
      }

      // Subir imágenes primero
      const uploadedImages: Record<string, string> = {};
      
      for (let i = 0; i < form.images.length; i++) {
        const file = form.images[i];
        const colorKey = form.colors[i] || `image${i + 1}`;
        const imageUrl = await uploadImage(file);
        uploadedImages[colorKey] = imageUrl;
      }

      // Si no hay colores específicos, usar nombres genéricos
      if (Object.keys(uploadedImages).length === 0 && form.images.length > 0) {
        for (let i = 0; i < form.images.length; i++) {
          const file = form.images[i];
          const imageUrl = await uploadImage(file);
          uploadedImages[`image${i + 1}`] = imageUrl;
        }
      }

      // Crear el producto en la base de datos
      const newProduct = await database.createProduct({
        name: form.name,
        shortDescription: form.shortDescription,
        description: form.description,
        price: parseFloat(form.price),
        category: form.category,
        sizes: form.sizes,
        colors: form.colors.length > 0 ? form.colors : ["default"],
        images: uploadedImages
      });

      console.log("Producto creado:", newProduct);
      toast.success("Producto agregado exitosamente!");
      
      // Limpiar formulario
      setForm({
        name: "",
        shortDescription: "",
        description: "",
        price: "",
        category: "",
        sizes: [],
        colors: [],
        images: []
      });

    } catch (error) {
      toast.error("Error al agregar el producto");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Agregar Nuevo Producto</h1>
        <p className="text-muted-foreground mt-2">
          Completa la información del producto para agregarlo al catálogo
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Información básica */}
        <Card>
          <CardHeader>
            <CardTitle>Información Básica</CardTitle>
            <CardDescription>
              Datos principales del producto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre del Producto *</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="ej: Nike Air Jordan 1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="price">Precio *</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={form.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="ej: 189.99"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="category">Categoría *</Label>
              <select
                id="category"
                value={form.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Selecciona una categoría</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="shortDescription">Descripción Corta</Label>
              <Input
                id="shortDescription"
                value={form.shortDescription}
                onChange={(e) => handleInputChange("shortDescription", e.target.value)}
                placeholder="Descripción breve del producto"
              />
            </div>

            <div>
              <Label htmlFor="description">Descripción Completa</Label>
              <Textarea
                id="description"
                value={form.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Descripción detallada del producto"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Tallas */}
        <Card>
          <CardHeader>
            <CardTitle>Tallas Disponibles</CardTitle>
            <CardDescription>
              Agrega las tallas disponibles para este producto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Input
                value={newSize}
                onChange={(e) => setNewSize(e.target.value)}
                placeholder="ej: S, M, L, 42, 43"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSize())}
              />
              <Button type="button" onClick={addSize}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.sizes.map(size => (
                <Badge key={size} variant="secondary" className="flex items-center gap-1">
                  {size.toUpperCase()}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => removeSize(size)}
                  />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Colores */}
        <Card>
          <CardHeader>
            <CardTitle>Colores Disponibles</CardTitle>
            <CardDescription>
              Agrega los colores disponibles para este producto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Input
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                placeholder="ej: negro, blanco, rojo"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addColor())}
              />
              <Button type="button" onClick={addColor}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.colors.map(color => (
                <Badge key={color} variant="secondary" className="flex items-center gap-1">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => removeColor(color)}
                  />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Imágenes */}
        <Card>
          <CardHeader>
            <CardTitle>Imágenes del Producto *</CardTitle>
            <CardDescription>
              Sube las imágenes del producto (máximo 10 imágenes)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <Label htmlFor="images" className="cursor-pointer">
                <span className="text-sm text-gray-600">
                  Haz clic para subir imágenes o arrastra y suelta
                </span>
                <Input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </Label>
            </div>

            {form.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {form.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <p className="text-xs text-gray-500 mt-1 truncate">
                      {image.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Botón de envío */}
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">
            Cancelar
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="min-w-32"
          >
            {isSubmitting ? "Guardando..." : "Agregar Producto"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage; 