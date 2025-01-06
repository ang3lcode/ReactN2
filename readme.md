```md
# React Native Pokémon App

Este es un proyecto de una aplicación móvil desarrollada con React Native que muestra una lista de Pokémon y permite ver detalles específicos de cada uno. La aplicación utiliza la API de PokeAPI para obtener los datos de los Pokémon.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:
```

.expo/
.vscode/
assets/
src/
api/
components/
Pokemon/
navigation/
screens/
utils/
.gitignore

app.json
App.tsx
index.ts
package.json
pokemon.json
tsconfig.json

````

### Descripción de Archivos y Directorios

- **assets/**: Contiene imágenes y otros recursos estáticos.
- **src/api/**: Contiene las funciones para interactuar con la API de PokeAPI.
- **src/components/**: Contiene los componentes reutilizables de la aplicación.
- **src/navigation/**: Contiene la configuración de la navegación de la aplicación.
- **src/screens/**: Contiene las pantallas principales de la aplicación.
- **src/utils/**: Contiene utilidades y constantes usadas en la aplicación.
- **App.tsx**: Punto de entrada principal de la aplicación.
- **index.ts**: Archivo de registro de la aplicación.
- **pokemon.json**: Archivo JSON con datos de ejemplo de un Pokémon.
- **tsconfig.json**: Configuración de TypeScript.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
````

2. Navega al directorio del proyecto:
   ```sh
   cd ReactN2
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```

## Ejecución

Para ejecutar la aplicación en un dispositivo o emulador, utiliza uno de los siguientes comandos:

```sh
npm run start
npm run android
npm run ios
npm run web
```

## Componentes Principales

###

Type.tsx

Este componente muestra los tipos de un Pokémon en forma de etiquetas de colores. Utiliza la función

getColorByPokemonType

para obtener el color correspondiente a cada tipo.

```tsx
import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";
import getColorByPokemonType from "../../utils/gerColorByPokemonType";

interface TypeProps {
   types: { type: { name: string } }[];
}

export default function Type(props: TypeProps) {
   const { types } = props;

   return (
      <View style={styles.content}>
         {map(types, (type, index) => (
            <View
               key={index}
               style={{
                  ...styles.pill,
                  backgroundColor: getColorByPokemonType(type.type.name),
               }}
            >
               <Text>{capitalize(type.type.name)}</Text>
            </View>
         ))}
      </View>
   );
}

const styles = StyleSheet.create({
   content: {
      marginTop: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
   },
   pill: {
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 20,
      marginHorizontal: 10,
   },
});
```

## Navegación

La aplicación utiliza `react-navigation` para la navegación entre pantallas. La configuración de la navegación se encuentra en el directorio

navigation

.

## API

Las funciones para interactuar con la API de PokeAPI se encuentran en

Pokemon.tsx

.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está bajo la Licencia MIT.

```
¡Espero que esto te sea útil!
```
