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

    private final EntertainmentRepository entertainmentRepository;
    private final LodgingRepository lodgingRepository;
    private final RestaurantRepository restaurantRepository;

    public void getSearchList(String title, int type, String barrier, int page, int size) {
        int titleLength = title.length();
        if (titleLength == 1) {
            switch (type) {
                case 12:
                    entertainmentRepository.findByTitleEquals(title);
                    break;
                case 14:
                    break;
                case 28:
                    break;
                case 32:
                    break;
                case 38:
                    break;
                case 39:
                    break;

                default:
                    break;
            }
        }

        else if (queryLength > 1) {
            switch (type) {
                case 12:
                    entertainmentRepository.findByTitle(title);
                    break;
                case 14:
                    break;
                case 28:
                    break;
                case 32:
                    lodgingRepository.findByAddr1RegexAndAddr2Regex();
                    break;
                case 38:
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
}
