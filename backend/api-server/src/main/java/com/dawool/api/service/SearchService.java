package com.dawool.api.service;

import com.dawool.api.dto.AddressDto;
import com.dawool.api.repository.CultureFacilityRepository;
import com.dawool.api.repository.EntertainmentRepository;
import com.dawool.api.repository.LeisureSportsRepository;
import com.dawool.api.repository.LodgingRepository;
import com.dawool.api.repository.RestaurantRepository;
import com.dawool.api.repository.ShoppingRepository;
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

    private final EntertainmentRepository entertainmentRepository;
    private final CultureFacilityRepository cultureFacilityRepository;
    private final LeisureSportsRepository leisureSportsRepository;
    private final ShoppingRepository shoppingRepository;
    private final LodgingRepository lodgingRepository;
    private final RestaurantRepository restaurantRepository;

    public void getSearchList(String title, int type, String barrier, int page, int size) {
        int titleLength = title.length();
        if (titleLength == 1) {
            switch (type) {
                case 12:
                    entertainmentRepository.findByTitle(title);
                    break;
                case 14:
                    cultureFacilityRepository.findByTitle(title);
                    break;
                case 28:
                    leisureSportsRepository.findByTitle(title);
                    break;
                case 32:
                    lodgingRepository.findByTitle(title);
                    break;
                case 38:
                    shoppingRepository.findByTitle(title);
                    break;
                case 39:
                    restaurantRepository.findByTitle(title);
                    break;
                default:
                    entertainmentRepository.findByTitle(title);
                    cultureFacilityRepository.findByTitle(title);
                    leisureSportsRepository.findByTitle(title);
                    lodgingRepository.findByTitle(title);
                    shoppingRepository.findByTitle(title);
                    restaurantRepository.findByTitle(title);
                    break;
            }
        }

        else if (titleLength > 1) {
            title = ".*"+ title +".*";
            switch (type) {
                case 12:
                    entertainmentRepository.findByTitleRegex(title);
                    break;
                case 14:
                    cultureFacilityRepository.findByTitleRegex(title);
                    break;
                case 28:
                    leisureSportsRepository.findByTitleRegex(title);
                    break;
                case 32:
                    lodgingRepository.findByTitleRegex(title);
                    break;
                case 38:
                    shoppingRepository.findByTitleRegex(title);
                    break;
                case 39:
                    restaurantRepository.findByTitleRegex(title);
                    break;
                default:
                    entertainmentRepository.findByTitleRegex(title);
                    cultureFacilityRepository.findByTitleRegex(title);
                    leisureSportsRepository.findByTitleRegex(title);
                    lodgingRepository.findByTitleRegex(title);
                    shoppingRepository.findByTitleRegex(title);
                    restaurantRepository.findByTitleRegex(title);
                    break;

            }
        }
    }
}
