import React, { useState, useEffect } from "react";
import styles from "./Brands.module.css";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export type Brand = {
  name: string;
  domain: string;
  logo: string;
  url: string;
};

const SortableBrandCard = ({
  brand,
  onRemove,
}: {
  brand: Brand;
  onRemove: (domain: string) => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: brand.domain });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
    opacity: isDragging ? 0.95 : 1,
    boxShadow: isDragging ? "0 2px 10px rgba(0,0,0,0.15)" : "none",
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onRemove(brand.domain);
  };

  return (
    <div ref={setNodeRef} style={style} className={styles.brandCard}>
      <button className={styles.removeBtn} onClick={handleClick}>
        ✕
      </button>
      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <div className={styles.brandContent}>
          <img
            src={brand.logo}
            alt={brand.name}
            {...attributes}
            {...listeners}
            style={{ cursor: "grab" }}
          />
          <span>{brand.name}</span>
        </div>
      </a>
    </div>
  );
};

const Brands: React.FC = () => {
  const [domainInput, setDomainInput] = useState("");
  const [favorites, setFavorites] = useState<Brand[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("favBrands");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const clearBrands = () => {
    localStorage.removeItem("favBrands");
    setFavorites([]);
  };

  const handleAddBrand = () => {
    const cleanBrand = domainInput.trim().toLowerCase().replace(/\s+/g, "");
    const cleanDomain = `${cleanBrand}.com`;
    if (favorites.some((b) => b.domain === cleanDomain)) {
      setErrorMessage("Brand already added.");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }
    const brandName = cleanDomain.split(".")[0];
    const logoUrl = `https://img.logo.dev/${cleanDomain}?token=pk_MvEaddaxQbSOGRKhgvuXkw`;

    const newBrand: Brand = {
      name: brandName,
      domain: cleanDomain,
      logo: logoUrl,
      url: `https://${cleanDomain}`,
    };

    const updated = [...favorites, newBrand];
    setFavorites(updated);
    localStorage.setItem("favBrands", JSON.stringify(updated));
    setDomainInput("");
    setErrorMessage("");
  };

  const removeBrand = (domain: string) => {
    const updated = favorites.filter((b) => b.domain !== domain);
    setFavorites(updated);
    localStorage.setItem("favBrands", JSON.stringify(updated));
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = favorites.findIndex((b) => b.domain === active.id);
      const newIndex = favorites.findIndex((b) => b.domain === over?.id);
      const reordered = arrayMove(favorites, oldIndex, newIndex);
      setFavorites(reordered);
      localStorage.setItem("favBrands", JSON.stringify(reordered));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.addBrand}>
        <input
          type="text"
          value={domainInput}
          onChange={(e) => setDomainInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddBrand();
            }
          }}
          placeholder="Enter brand name"
          className={styles.input}
        />
        <button onClick={handleAddBrand} className={styles.addButton}>
          Add
        </button>
      </div>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={favorites.map((b) => b.domain)}
          strategy={rectSortingStrategy}
        >
          <div className={styles.favGrid}>
            {favorites.map((brand) => (
              <SortableBrandCard
                key={brand.domain}
                brand={brand}
                onRemove={removeBrand}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {favorites.length > 0 && (
        <button className={styles.clearButton} onClick={clearBrands}>
          Clear Favourite Brands
        </button>
      )}
    </div>
  );
};

export default Brands;
