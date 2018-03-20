package org.collectiveone.modules.tokens.repositories;

import java.util.List;
import java.util.UUID;

import org.collectiveone.modules.tokens.TokenHolder;
import org.collectiveone.modules.tokens.TokenType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TokenHolderRepositoryIf extends CrudRepository<TokenHolder, UUID> {
	
	TokenHolder findByTokenTypeIdAndHolderId(UUID tokenTypeId, UUID holderId);
	
	@Query("SELECT holder.tokenType FROM TokenHolder holder WHERE holder.holderId = ?1 ORDER BY holder.tokenType.name ")
	List<TokenType> getTokenTypesHeldBy(UUID holderId);
	
	
	@Query("SELECT holder.tokenType FROM TokenHolder holder WHERE holder.holderId = ?1 AND holder.tokenType.id != ?2")
	List<TokenType> getTokenTypesHeldByOtherThan(UUID holderId, UUID tokenTypeId);
}
