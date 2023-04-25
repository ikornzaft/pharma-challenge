import { FiltersContext } from '@/context/filters';
import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { formaFarmaceutica } from '@/data/';
import { Checkbox } from './common';

const SidebarWrapper = styled.div`
  background-color: #fff;
  border-right: 1px solid #ddd;
  padding: 4rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 20%;
`;

export const Sidebar: FC = () => {
  const [selectedFormasFarmaceuticas, setSelectedFormasFarmaceuticas] =
    useState<string[]>([]);
  const { setFormasFilter } = useContext(FiltersContext);

  const handleFormasFarmaceuticasChange = (
    event: React.ChangeEvent,
    forma: string
  ) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      const newSelection = [...selectedFormasFarmaceuticas, forma];
      setSelectedFormasFarmaceuticas(newSelection);
      setFormasFilter(newSelection);
    } else {
      const newSelection = selectedFormasFarmaceuticas.filter(
        (selectedForma) => selectedForma !== forma
      );
      setSelectedFormasFarmaceuticas(newSelection);
      setFormasFilter(newSelection);
    }
  };

  return (
    <SidebarWrapper>
      <fieldset>
        <legend>Forma Farmacéutica</legend>
        {formaFarmaceutica.map((forma) => (
          <div key={forma}>
            <Checkbox
              type="checkbox"
              id={forma}
              value={forma}
              checked={selectedFormasFarmaceuticas.includes(forma)}
              onChange={(event) =>
                handleFormasFarmaceuticasChange(event, forma)
              }
            />
            <label htmlFor={forma}>{forma}</label>
          </div>
        ))}
      </fieldset>
    </SidebarWrapper>
  );
};

// codigo_filter: string;
// nombre_filter: string;
// forma_farmaceutica_filter: string[];
// fabricante_filter: string[];
// procedencia_filter: string[];
// titular_filter: string[];
