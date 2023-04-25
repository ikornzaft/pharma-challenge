import { FiltersContext } from '@/context/filters';
import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { fabricantes, formaFarmaceutica } from '@/data/';
import { Checkbox } from './common';

const SidebarWrapper = styled.div`
  background-color: #fff;
  border-right: 1px solid #ddd;
  padding: 4rem 1rem;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  align-items: center;
  flex-direction: column;
  width: 20%;
`;

const Filter = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  border: 2px solid var(--color-salmon-light);
  border-radius: 8px;
  width: 90%;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const Sidebar: FC = () => {
  const [selectedFormasFarmaceuticas, setSelectedFormasFarmaceuticas] =
    useState<string[]>([]);
  const [selectedFabricantes, setSelectedFabricantes] = useState<string[]>([]);
  const { setFormasFilter, setFabricantesFilter } = useContext(FiltersContext);

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

  const handleFabricantesChange = (
    event: React.ChangeEvent,
    fabricante: string
  ) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      const newSelection = [...selectedFabricantes, fabricante];
      setSelectedFabricantes(newSelection);
      setFabricantesFilter(newSelection);
    } else {
      const newSelection = selectedFabricantes.filter(
        (selectedFabricantes) => selectedFabricantes !== fabricante
      );
      setSelectedFabricantes(newSelection);
      setFabricantesFilter(newSelection);
    }
  };

  return (
    <SidebarWrapper>
      <Filter>
        <legend>Forma Farmacéutica</legend>
        {formaFarmaceutica.map((forma) => (
          <div key={forma}>
            <BoxWrapper>
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
            </BoxWrapper>
          </div>
        ))}
      </Filter>
      <Filter>
        <legend>Laboratorio</legend>
        {fabricantes.map((fabricante) => (
          <div key={fabricante}>
            <BoxWrapper>
              <Checkbox
                type="checkbox"
                id={fabricante}
                value={fabricante}
                checked={selectedFabricantes.includes(fabricante)}
                onChange={(event) => handleFabricantesChange(event, fabricante)}
              />
              <label htmlFor={fabricante}>{fabricante}</label>
            </BoxWrapper>
          </div>
        ))}
      </Filter>
    </SidebarWrapper>
  );
};
