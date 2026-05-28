import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

type Country = {
  name: {
    common: string;
  };
};

export default function CountriesScreen() {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useQuery<Array<Country>>({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name",
      );
      return response.json();
    },
  });
  const filteredData = data?.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {/* {data &&
        data.map((country) => (
          <Text key={country.name.common}>{country.name.common}</Text>
        ))} */}
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name.common}</Text>
        )}
        ListHeaderComponent={
          <TextInput
            placeholder="Search"
            style={styles.input}
            value={search}
            onChangeText={setSearch}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
