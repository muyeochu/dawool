package com.dawool.api.service;

import com.dawool.api.dto.AddressDto;
import com.dawool.api.repository.EntertainmentRepository;
import com.dawool.api.repository.LodgingRepository;
import com.dawool.api.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchService {

    @Value("${kakao.restapi.key}")
    private String kakaoAPIKey;
    private final EntertainmentRepository entertainmentRepository;
    private final LodgingRepository lodgingRepository;
    private final RestaurantRepository restaurantRepository;

    public List<AddressDto> getAddressFromKakao(String area) {
        Mono<String> mono = WebClient.builder().baseUrl("http://dapi.kakao.com")
                .build()
                .get()
                .uri(uriBuilder -> uriBuilder.path("v2/local/search/address.json")
                        .queryParam("query", area)
                        .queryParam("size", 30)
                        .build()
                )
                .header("Authorization", "KakaoAK "+kakaoAPIKey)
                .exchangeToMono(response -> response.bodyToMono(String.class));

        JSONObject addressObject = new JSONObject(mono.block());
        List<AddressDto> addressList = new ArrayList<>();
        if(addressObject.has("errorType")) {
            return addressList;
        }

        JSONArray addressArray = addressObject.getJSONArray("documents");
        for(int i = 0, addressArrayLength = addressArray.length(); i<addressArrayLength; i++) {
            AddressDto kakaoAddressDTO = AddressDto.builder()
                    .numberAddress("")
                    .roadAddress("")
                    .build();
            JSONObject object = addressArray.getJSONObject(i);

            JSONObject addressInfo = new JSONObject();

            if(!object.isNull("address")) {
                addressInfo = object.getJSONObject("address");
                kakaoAddressDTO.setNumberAddress(addressInfo.getString("address_name"));
            }

            if(!object.isNull("road_address")) {
                addressInfo = object.getJSONObject("road_address");
                kakaoAddressDTO.setRoadAddress(addressInfo.getString("address_name"));
            }

            addressList.add(kakaoAddressDTO);
        }

//        List<SearchProductResponseDTO> searchResult = new ArrayList<>();
//        for(KakaoAddressDTO kakaoAddress : addressList) {
//            String roadAddr = kakaoAddress.getRoadAddress();
//            String addr = kakaoAddress.getAddress();
//
//            List<Integer> buildings = buildingRepository
//                    .findBuildingIndexByBuildingAddressStartingWithAndBuildingRoadAddressStartingWith(addr, roadAddr);
//
//            for(Integer idx : buildings) {
//                List<Product> product = productRepository.productFetchJoin(idx);
//                for(Product productInfo : product) {
//                    String[] photo = productInfo.getProductPhoto().split(",");
//                    productInfo.setProductPhoto(photo[0]);
//                    searchResult.add(SearchProductResponseDTO.toDTO(productInfo, meetingRepository.existsByProduct(productInfo)));
//                }
//            }
//        }
        return null;
    }

    public void getSearchList(String area, int type, String barrier, int page, int size) {

        switch(type) {
            case 12:
                entertainmentRepository.findByAddr1RegexAndAddr2Regex();
                break;
            case 32:
                lodgingRepository.findByAddr1RegexAndAddr2Regex();
                break;
            case 39:
                restaurantRepository.findByAddr1RegexAndAddr2Regex();
                break;
            default:
                entertainmentRepository.findByAddr1RegexAndAddr2Regex();
                lodgingRepository.findByAddr1RegexAndAddr2Regex();
                restaurantRepository.findByAddr1RegexAndAddr2Regex();
                break;

        }
    }
}
